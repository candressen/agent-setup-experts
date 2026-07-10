import { NextRequest, NextResponse } from 'next/server'

import { AUTH_COOKIE_NAME, verifyToken } from '@/lib/auth'
import { convertRowsToCsv, getAgentByIdForClient, getAllOutputRowsForAgent } from '@/lib/dashboard'

type RouteContext = {
  params: Promise<{
    agentId: string
  }>
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = await verifyToken(token)

  if (!client) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { agentId } = await params
  const agent = await getAgentByIdForClient(client.clientId, agentId)

  if (!agent) {
    return NextResponse.json({ error: 'Agent not found' }, { status: 404 })
  }

  const rows = await getAllOutputRowsForAgent(agent)
  const csv = convertRowsToCsv(rows)

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${agent.agent_slug}-export.csv"`,
    },
  })
}
