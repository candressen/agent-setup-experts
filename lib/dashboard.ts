import { supabase } from '@/lib/supabase'

export type AgentStatus = 'active' | 'idle' | 'error' | 'paused'

type JsonRecord = Record<string, unknown>

export type DashboardAgent = {
  id: string
  client_id: string
  agent_slug: string
  agent_name: string
  agent_type: string
  output_table: string | null
  output_filter: JsonRecord | null
  status: AgentStatus
  last_run_at: string | null
  metadata: JsonRecord | null
  created_at: string
}

export type DashboardActivity = {
  id: string
  client_id: string
  agent_id: string | null
  event: string
  metadata: JsonRecord | null
  created_at: string
}

export type DashboardOverviewAgent = DashboardAgent & {
  headlineCount: number
}

export type DashboardOverview = {
  agents: DashboardOverviewAgent[]
  recentActivity: DashboardActivity[]
}

export type RoofingLeadRow = {
  company: string | null
  owner_name: string | null
  phone: string | null
  email: string | null
  city: string | null
  state: string | null
  google_rating: number | string | null
  sent_at: string | null
}

export type AgentDetailResult = {
  agent: DashboardAgent
  totalCount: number
  rows: RoofingLeadRow[]
  totalPages: number
  page: number
  pageSize: number
}

function applyOutputFilter<T>(builder: T, outputFilter: JsonRecord | null | undefined) {
  if (!outputFilter || Array.isArray(outputFilter)) {
    return builder
  }

  let filteredBuilder = builder as T & {
    eq: (column: string, value: unknown) => typeof filteredBuilder
  }

  for (const [key, value] of Object.entries(outputFilter)) {
    if (value !== undefined && value !== null) {
      filteredBuilder = filteredBuilder.eq(key, value)
    }
  }

  return filteredBuilder as T
}

export async function getClientAgents(clientId: string) {
  const { data, error } = await supabase
    .from('client_agents')
    .select(
      'id, client_id, agent_slug, agent_name, agent_type, output_table, output_filter, status, last_run_at, metadata, created_at'
    )
    .eq('client_id', clientId)
    .order('created_at', { ascending: true })

  if (error) {
    throw new Error(`Failed to load client agents: ${error.message}`)
  }

  return (data ?? []) as DashboardAgent[]
}

export async function getRecentActivity(clientId: string, limit = 10) {
  const { data, error } = await supabase
    .from('agent_activity')
    .select('id, client_id, agent_id, event, metadata, created_at')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    throw new Error(`Failed to load activity feed: ${error.message}`)
  }

  return (data ?? []) as DashboardActivity[]
}

export async function getOutputCount(
  outputTable: string | null,
  outputFilter: JsonRecord | null | undefined
) {
  if (!outputTable) {
    return 0
  }

  let builder = supabase.from(outputTable).select('*', { count: 'exact', head: true })
  builder = applyOutputFilter(builder, outputFilter)

  const { count, error } = await builder

  if (error) {
    console.error(`Failed to count rows for ${outputTable}`, error)
    return 0
  }

  return count ?? 0
}

export async function getDashboardOverview(clientId: string): Promise<DashboardOverview> {
  const [agents, recentActivity] = await Promise.all([
    getClientAgents(clientId),
    getRecentActivity(clientId),
  ])

  const agentsWithCounts = await Promise.all(
    agents.map(async (agent) => ({
      ...agent,
      headlineCount: typeof agent.metadata?.total_leads === 'number'
        ? (agent.metadata.total_leads as number)
        : await getOutputCount(agent.output_table, agent.output_filter),
    }))
  )

  return {
    agents: agentsWithCounts,
    recentActivity,
  }
}

export async function getAgentByIdForClient(clientId: string, agentId: string) {
  const { data, error } = await supabase
    .from('client_agents')
    .select(
      'id, client_id, agent_slug, agent_name, agent_type, output_table, output_filter, status, last_run_at, metadata, created_at'
    )
    .eq('client_id', clientId)
    .eq('id', agentId)
    .maybeSingle()

  if (error) {
    console.error('Failed to load agent:', error.message)
    return null
  }

  return data as DashboardAgent | null
}

export async function getRoofingLeadPage(
  outputTable: string,
  outputFilter: JsonRecord | null | undefined,
  page: number,
  pageSize: number
) {
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  let builder = supabase
    .from(outputTable)
    .select('company, owner_name, phone, email, city, state, google_rating, sent_at', {
      count: 'exact',
    })
    .range(from, to)
    .order('company', { ascending: true })

  builder = applyOutputFilter(builder, outputFilter)

  const { data, count, error } = await builder

  if (error) {
    console.error('Failed to load roofing leads:', error.message)
    return { rows: [], totalCount: 0 }
  }

  return {
    rows: (data ?? []) as RoofingLeadRow[],
    totalCount: count ?? 0,
  }
}

export async function getAgentDetail(
  clientId: string,
  agentId: string,
  page: number,
  pageSize = 25
): Promise<AgentDetailResult | null> {
  const agent = await getAgentByIdForClient(clientId, agentId)

  if (!agent) {
    return null
  }

  if (agent.output_table !== 'roofing_leads') {
    return {
      agent,
      totalCount: 0,
      rows: [],
      totalPages: 0,
      page,
      pageSize,
    }
  }

  const { rows, totalCount } = await getRoofingLeadPage(
    agent.output_table,
    agent.output_filter,
    page,
    pageSize
  )

  return {
    agent,
    totalCount,
    rows,
    totalPages: totalCount === 0 ? 0 : Math.ceil(totalCount / pageSize),
    page,
    pageSize,
  }
}

function escapeCsvCell(value: unknown) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`
}

export function convertRowsToCsv(rows: Record<string, unknown>[]) {
  if (rows.length === 0) {
    return ''
  }

  const columns = Array.from(
    rows.reduce((keys, row) => {
      Object.keys(row).forEach((key) => keys.add(key))
      return keys
    }, new Set<string>())
  )

  const header = columns.map(escapeCsvCell).join(',')
  const body = rows.map((row) => columns.map((column) => escapeCsvCell(row[column])).join(','))

  return [header, ...body].join('\n')
}

export async function getAllOutputRowsForAgent(agent: DashboardAgent) {
  if (!agent.output_table) {
    return [] as Record<string, unknown>[]
  }

  let builder = supabase.from(agent.output_table).select('*')
  builder = applyOutputFilter(builder, agent.output_filter)

  const { data, error } = await builder

  if (error) {
    throw new Error(`Failed to export ${agent.output_table}: ${error.message}`)
  }

  return (data ?? []) as Record<string, unknown>[]
}
