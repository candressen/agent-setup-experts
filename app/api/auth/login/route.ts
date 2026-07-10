import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

import { AUTH_COOKIE_NAME, signToken } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

interface LoginRequestBody {
  email?: string
  username?: string
  password?: string
}

function getRequestIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  return forwardedFor?.split(',')[0]?.trim() ?? request.headers.get('x-real-ip') ?? null
}

export async function POST(request: NextRequest) {
  let body: LoginRequestBody

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Support username login: if no @, treat as username and append @ase.local
  const rawIdentifier = (body.email ?? body.username ?? '').trim().toLowerCase()
  const email = rawIdentifier.includes('@') ? rawIdentifier : `${rawIdentifier}@ase.local`
  const password = body.password
  const ip = getRequestIp(request)

  if (!rawIdentifier || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
  }

  const windowStart = new Date(Date.now() - 15 * 60 * 1000).toISOString()

  const { count: failedAttemptCount, error: rateLimitError } = await supabase
    .from('login_attempts')
    .select('id', { count: 'exact', head: true })
    .eq('email', email)
    .eq('success', false)
    .gte('created_at', windowStart)

  if (rateLimitError) {
    console.error('Failed to check login rate limit', rateLimitError)
    return NextResponse.json({ error: 'Unable to process login right now' }, { status: 500 })
  }

  if ((failedAttemptCount ?? 0) >= 5) {
    return NextResponse.json(
      { error: 'Too many attempts, try again in 15 minutes' },
      { status: 429 }
    )
  }

  const { data: client, error: clientError } = await supabase
    .from('clients')
    .select('id, name, email, password_hash, plan, trial_expires_at')
    .eq('email', email)
    .maybeSingle()

  if (clientError) {
    console.error('Failed to fetch client during login', clientError)
    return NextResponse.json({ error: 'Unable to process login right now' }, { status: 500 })
  }

  const isValidPassword = client
    ? await bcrypt.compare(password, client.password_hash)
    : false

  if (!client || !isValidPassword) {
    const { error: attemptError } = await supabase.from('login_attempts').insert({
      email,
      ip,
      success: false,
    })

    if (attemptError) {
      console.error('Failed to log unsuccessful login attempt', attemptError)
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const trialExpiresAt = client.trial_expires_at
    ? new Date(client.trial_expires_at).toISOString()
    : null

  const token = await signToken({
    clientId: client.id,
    email: client.email,
    name: client.name,
    plan: client.plan,
    trialExpiresAt,
  })

  const { error: attemptError } = await supabase.from('login_attempts').insert({
    email,
    ip,
    success: true,
  })

  if (attemptError) {
    console.error('Failed to log successful login attempt', attemptError)
  }

  const response = NextResponse.json({
    success: true,
    client: {
      name: client.name,
      plan: client.plan,
      trialExpiresAt,
    },
  })

  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
