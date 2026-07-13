import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

import PortalLogoutButton from '@/components/portal/PortalLogoutButton'
import StatusPill from '@/components/portal/StatusPill'
import { getAgentDetail } from '@/lib/dashboard'
import {
  formatDateTime,
  formatNumber,
  formatRelativeTime,
  getPortalClientFromCookies,
  isTrialExpired,
} from '@/lib/portal'

type AgentDetailPageProps = {
  params: Promise<{
    agentId: string
  }>
  searchParams: Promise<{
    page?: string
  }>
}

function buildPageHref(agentId: string, page: number) {
  return `/dashboard/agents/${agentId}?page=${page}`
}

export default async function DashboardAgentDetailPage({
  params,
  searchParams,
}: AgentDetailPageProps) {
  const client = await getPortalClientFromCookies()

  if (!client || isTrialExpired(client)) {
    redirect('/login')
  }

  const { agentId } = await params
  const { page: rawPage } = await searchParams
  const page = Math.max(1, Number.parseInt(rawPage ?? '1', 10) || 1)
  let detail
  try {
    detail = await getAgentDetail(client.clientId, agentId, page)
  } catch (err) {
    console.error('Agent detail load error:', err)
    detail = null
  }

  if (!detail) {
    notFound()
  }

  const { agent } = detail
  const isRoofingLeadAgent = agent.output_table === 'roofing_leads'

  return (
    <div className='px-4 py-6 sm:px-6 lg:px-10 lg:py-10'>
      <div className='mx-auto max-w-7xl space-y-8'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <Link href='/dashboard' className='text-sm font-semibold text-indigo-600 hover:text-indigo-700'>
            ← Back to dashboard
          </Link>
          <PortalLogoutButton className='rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60' />
        </div>

        <section className='rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
            <div className='space-y-4'>
              <div className='flex flex-wrap items-center gap-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600'>
                  Agent detail
                </p>
                <StatusPill status={agent.status} />
              </div>
              <div>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>{agent.agent_name}</h1>
                <p className='mt-2 text-base capitalize text-gray-600'>
                  {agent.agent_type.replace(/_/g, ' ')}
                </p>
                {typeof agent.metadata?.description === 'string' && agent.metadata.description ? (
                  <p className='mt-2 text-sm text-gray-500'>{agent.metadata.description as string}</p>
                ) : null}
              </div>
              <div className='grid gap-4 sm:grid-cols-3'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                    Output table
                  </p>
                  <p className='mt-2 text-sm font-medium text-gray-900'>{agent.output_table ?? 'None'}</p>
                </div>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                    Last run
                  </p>
                  <p className='mt-2 text-sm font-medium text-gray-900'>
                    {formatRelativeTime(agent.last_run_at)}
                  </p>
                </div>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                    Last run at
                  </p>
                  <p className='mt-2 text-sm font-medium text-gray-900'>
                    {formatDateTime(agent.last_run_at)}
                  </p>
                </div>
              </div>
            </div>

            <div className='rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 lg:min-w-72'>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                Headline metric
              </p>
              <p className='mt-3 text-4xl font-bold tabular-nums text-gray-900'>
                {formatNumber(detail.totalCount)}
              </p>
              <p className='mt-2 text-sm text-gray-600'>
                {isRoofingLeadAgent ? 'Total roofing leads available' : 'Output data'}
              </p>
            </div>
          </div>
        </section>

        {isRoofingLeadAgent ? (
          <section className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
            <div className='flex flex-col gap-4 border-b border-gray-100 px-6 py-5 lg:flex-row lg:items-center lg:justify-between'>
              <div>
                <h2 className='text-xl font-semibold text-gray-900'>Lead output</h2>
                <p className='mt-2 text-sm text-gray-600'>
                  Showing {detail.rows.length === 0 ? 0 : (detail.page - 1) * detail.pageSize + 1}
                  -
                  {(detail.page - 1) * detail.pageSize + detail.rows.length} of{' '}
                  {formatNumber(detail.totalCount)} leads.
                </p>
              </div>
              <a
                href={`/api/dashboard/export/${agent.id}`}
                className='rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700'
              >
                Export CSV
              </a>
            </div>

            <div className='overflow-x-auto'>
              <table className='min-w-full'>
                <thead className='bg-gray-50'>
                  <tr>
                    {[
                      'Company',
                      'Owner Name',
                      'Phone',
                      'Email',
                      'City',
                      'State',
                      'Google Rating',
                      'Email Sent',
                    ].map((column) => (
                      <th
                        key={column}
                        scope='col'
                        className='border-b border-gray-100 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detail.rows.length === 0 ? (
                    <tr>
                      <td colSpan={8} className='px-4 py-12 text-center text-sm text-gray-500'>
                        No output rows found for this agent yet.
                      </td>
                    </tr>
                  ) : (
                    detail.rows.map((row, index) => (
                      <tr key={`${row.company ?? 'lead'}-${index}`} className='even:bg-gray-50'>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.company ?? '—'}
                        </td>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.owner_name ?? '—'}
                        </td>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.phone ?? '—'}
                        </td>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.email ?? '—'}
                        </td>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.city ?? '—'}
                        </td>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.state ?? '—'}
                        </td>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.google_rating ?? '—'}
                        </td>
                        <td className='border-b border-gray-100 px-4 py-3 text-sm text-gray-700'>
                          {row.sent_at ? new Date(row.sent_at).toLocaleDateString() : '—'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className='flex flex-col gap-3 border-t border-gray-100 px-6 py-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between'>
              <p className='tabular-nums'>
                Page {detail.totalPages === 0 ? 0 : detail.page} of {detail.totalPages}
              </p>
              <div className='flex items-center gap-3'>
                <Link
                  href={buildPageHref(agent.id, Math.max(1, detail.page - 1))}
                  aria-disabled={detail.page <= 1}
                  className={`rounded-lg border px-4 py-2 font-medium ${
                    detail.page <= 1
                      ? 'pointer-events-none border-gray-200 bg-gray-100 text-gray-400'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Previous
                </Link>
                <Link
                  href={buildPageHref(agent.id, detail.page + 1)}
                  aria-disabled={detail.totalPages === 0 || detail.page >= detail.totalPages}
                  className={`rounded-lg border px-4 py-2 font-medium ${
                    detail.totalPages === 0 || detail.page >= detail.totalPages
                      ? 'pointer-events-none border-gray-200 bg-gray-100 text-gray-400'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Next
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className='rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center shadow-sm'>
            <h2 className='text-2xl font-semibold text-gray-900'>Output data coming soon</h2>
            <p className='mt-3 text-sm text-gray-600'>
              This agent is connected, but a dedicated output viewer has not been built for this
              data type yet.
            </p>
          </section>
        )}
      </div>
    </div>
  )
}
