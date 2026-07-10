import { NextRequest, NextResponse } from 'next/server'

import { AUTH_COOKIE_NAME, verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const payload = await verifyToken(token)

  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (payload.plan === 'trial' && payload.trialExpiresAt) {
    const expiry = new Date(payload.trialExpiresAt)
    if (expiry < new Date()) {
      return NextResponse.json({ error: 'Trial expired' }, { status: 401 })
    }
  }

  return NextResponse.json({
    client: {
      clientId: payload.clientId,
      email: payload.email,
      name: payload.name,
      plan: payload.plan,
      trialExpiresAt: payload.trialExpiresAt,
    },
  })
}
