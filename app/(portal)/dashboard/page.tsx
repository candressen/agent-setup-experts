import Link from 'next/link'
import { redirect } from 'next/navigation'

import ActivityFeed from '@/components/portal/ActivityFeed'
import StatusPill from '@/components/portal/StatusPill'
import { getDashboardOverview, type DashboardOverviewAgent } from '@/lib/dashboard'
import {
  formatDateTime,
  formatNumber,
  formatRelativeTime,
  getPortalClientFromCookies,
  isTrialExpired,
} from '@/lib/portal'

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string
  value: string
  detail: string
}) {
  return (
    <section className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md'>
      <p className='text-sm font-medium uppercase tracking-[0.18em] text-gray-500'>{label}</p>
      <p className='mt-4 text-4xl font-bold tabular-nums text-gray-900'>{value}</p>
      <p className='mt-3 text-sm text-gray-600'>{detail}</p>
    </section>
  )
}

function AgentTypeIcon({ agentType }: { agentType: string }) {
  if (agentType === 'lead_generator') {
    return (
      <svg aria-hidden='true' className='h-5 w-5' viewBox='0 0 20 20' fill='none'>
        <path
          d='M10 2.5 4.167 5.833v4.334c0 3.683 2.49 7.114 5.833 8.333 3.343-1.22 5.833-4.65 5.833-8.333V5.833L10 2.5Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
        />
        <path
          d='M7.5 10h5M10 7.5v5'
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth='1.5'
        />
      </svg>
    )
  }

  return (
    <svg aria-hidden='true' className='h-5 w-5' viewBox='0 0 20 20' fill='none'>
      <rect x='3.333' y='3.333' width='13.334' height='13.334' rx='3' stroke='currentColor' strokeWidth='1.5' />
      <path d='M6.667 10h6.666M10 6.667v6.666' stroke='currentColor' strokeLinecap='round' strokeWidth='1.5' />
    </svg>
  )
}

function getAgentMetricLabel(agent: DashboardOverviewAgent) {
  if (agent.output_table === 'roofing_leads') {
    return 'leads'
  }

  return 'records'
}

function getActivityTone(event: string): 'success' | 'warning' | 'error' | 'info' | 'run' {
  const normalized = event.toLowerCase()

  if (normalized.includes('error') || normalized.includes('failed')) {
    return 'error'
  }

  if (normalized.includes('warning') || normalized.includes('stale')) {
    return 'warning'
  }

  if (normalized.includes('completed') || normalized.includes('delivered') || normalized.includes('created')) {
    return 'success'
  }

  if (normalized.includes('run') || normalized.includes('started')) {
    return 'run'
  }

  return 'info'
}

export default async function DashboardOverviewPage() {
  const client = await getPortalClientFromCookies()

  if (!client || isTrialExpired(client)) {
    redirect('/login')
  }

  const overview = await getDashboardOverview(client.clientId)
  const activeAgentCount = overview.agents.filter((agent) => agent.status === 'active').length
  const totalOutputRecords = overview.agents.reduce((sum, agent) => sum + agent.headlineCount, 0)
  const latestRun = overview.agents
    .map((agent) => agent.last_run_at)
    .filter((value): value is string => Boolean(value))
    .sort((left, right) => new Date(right).getTime() - new Date(left).getTime())[0] ?? null

  return (
    <div className='px-4 py-6 sm:px-6 lg:px-10 lg:py-10'>
      <div className='mx-auto max-w-7xl space-y-10'>
        <section className='space-y-3'>
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600'>
            Overview
          </p>
          <div className='flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
            <div>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900'>Dashboard overview</h1>
              <p className='mt-3 max-w-3xl text-base text-gray-600'>
                Monitor your ASE agents, output volume, and recent delivery activity from one place.
              </p>
            </div>
            <div className='rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-700'>
              Last agent run: <span className='font-semibold'>{formatRelativeTime(latestRun)}</span>
            </div>
          </div>
        </section>

        <section className='grid gap-4 md:grid-cols-3'>
          <MetricCard
            label='Active agents'
            value={formatNumber(activeAgentCount)}
            detail={`${formatNumber(overview.agents.length)} total configured`}
          />
          <MetricCard
            label='Total leads enriched'
            value={formatNumber(totalOutputRecords)}
            detail='Leads scraped and enriched across all active agents'
          />
          <MetricCard
            label='Last agent run'
            value={latestRun ? formatRelativeTime(latestRun) : 'Never'}
            detail={latestRun ? formatDateTime(latestRun) : 'No successful runs recorded yet'}
          />
        </section>

        <section id='agents' className='space-y-5'>
          <div className='flex items-end justify-between gap-4'>
            <div>
              <h2 className='text-2xl font-semibold tracking-tight text-gray-900'>Agents</h2>
              <p className='mt-2 text-sm text-gray-600'>
                View status, recency, and headline output volume for each active workflow.
              </p>
            </div>
          </div>

          {overview.agents.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center shadow-sm'>
              <h3 className='text-xl font-semibold text-gray-900'>No agents configured yet</h3>
              <p className='mt-3 text-sm text-gray-600'>
                Your ASE team can add agent connections here as soon as they are ready.
              </p>
            </div>
          ) : (
            <div className='grid gap-4 xl:grid-cols-2'>
              {overview.agents.map((agent) => (
                <article
                  key={agent.id}
                  className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md'
                >
                  <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-3'>
                        <span className='flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600'>
                          <AgentTypeIcon agentType={agent.agent_type} />
                        </span>
                        <div>
                          <h3 className='text-xl font-semibold text-gray-900'>{agent.agent_name}</h3>
                          <p className='text-sm capitalize text-gray-500'>
                            {agent.agent_type.replace(/_/g, ' ')}
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-wrap items-center gap-3'>
                        <StatusPill status={agent.status} />
                        <span className='text-sm text-gray-500'>
                          Last run {formatRelativeTime(agent.last_run_at)}
                        </span>
                      </div>
                    </div>

                    <div className='rounded-2xl bg-gray-50 px-5 py-4 sm:min-w-48'>
                      <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                        Headline metric
                      </p>
                      <p className='mt-3 text-3xl font-bold tabular-nums text-gray-900'>
                        {formatNumber(agent.headlineCount)}
                      </p>
                      <p className='mt-1 text-sm text-gray-600'>
                        {getAgentMetricLabel(agent)}
                      </p>
                    </div>
                  </div>

                  <div className='mt-6 flex items-center justify-between border-t border-gray-100 pt-5'>
                    <p className='text-sm text-gray-500'>
                      Output table: <span className='font-medium text-gray-700'>{agent.output_table ?? 'None'}</span>
                    </p>
                    <Link
                      href={`/dashboard/agents/${agent.id}`}
                      className='text-sm font-semibold text-indigo-600 transition hover:text-indigo-700'
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <ActivityFeed
          items={overview.recentActivity.map((item) => ({
            id: item.id,
            title: item.event,
            timestamp: formatRelativeTime(item.created_at),
            tone: getActivityTone(item.event),
          }))}
          className='border border-gray-200 bg-white shadow-sm'
        />
      </div>
    </div>
  )
}
