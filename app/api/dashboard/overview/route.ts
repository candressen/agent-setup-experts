import { NextRequest, NextResponse } from 'next/server'

import { AUTH_COOKIE_NAME, verifyToken } from '@/lib/auth'
import { getDashboardOverview } from '@/lib/dashboard'

export async function GET(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = await verifyToken(token)

  if (!client) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const overview = await getDashboardOverview(client.clientId)

  return NextResponse.json(overview)
}
