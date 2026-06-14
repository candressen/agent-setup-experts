import { NextResponse } from 'next/server'

const SUPABASE_URL = 'https://iigcabyfctidhkudotqu.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZ2NhYnlmY3RpZGhrdWRvdHF1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODQ2MzQyNSwiZXhwIjoyMDk0MDM5NDI1fQ.fC9zPQ29a4Q7Pnnd2QllXnLpzdUDTDCGLxyu8E0UNtI'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    const email = body?.email?.trim().toLowerCase()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 })
    }

    await fetch(`${SUPABASE_URL}/rest/v1/ase_email_leads`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal,resolution=ignore-duplicates',
      },
      body: JSON.stringify({ email, source: 'lead-magnet-popup' }),
    })

    const emailBody = `Hi there,

Thank you for downloading our free guide!

Here's your copy of "Build Your Own Email Manager AI Agent":
👉 https://agentsetupexperts.com/downloads/email-agent-guide

This step-by-step guide walks you through:
• How email is costing your business time and money
• What an Email Manager AI Agent actually does
• The tools you need (free and paid options)
• Step-by-step setup instructions
• What we build for businesses like yours

If you have any questions or want to see what a full AI agent setup looks like for your business, book a free call:
👉 https://calendly.com/agentsetupexperts/30min

Talk soon,
Christian
Agent Setup Experts
agentsetupexperts.com`

    const gmailToken = await getGmailToken()
    if (gmailToken) {
      await sendEmail(
        gmailToken,
        email,
        '📧 Your Free Guide: Build an Email Manager AI Agent',
        emailBody,
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead magnet error:', error)
    return NextResponse.json({ success: true })
  }
}

async function getGmailToken(): Promise<string | null> {
  try {
    const credsRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN ?? '',
        client_id: process.env.GOOGLE_CLIENT_ID ?? '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        grant_type: 'refresh_token',
      }),
    })
    const data = await credsRes.json()
    return data.access_token ?? null
  } catch {
    return null
  }
}

async function sendEmail(token: string, to: string, subject: string, body: string) {
  const message = [
    'From: Agent Setup Experts <bobtheaiagent@gmail.com>',
    `To: ${to}`,
    `Subject: ${subject}`,
    'Content-Type: text/plain; charset=utf-8',
    '',
    body,
  ].join('\n')

  const encoded = Buffer.from(message).toString('base64url')

  await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: encoded }),
  })
}
