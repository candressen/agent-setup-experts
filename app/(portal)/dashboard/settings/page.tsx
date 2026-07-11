import { redirect } from 'next/navigation'

import PortalLogoutButton from '@/components/portal/PortalLogoutButton'
import {
  formatDateTime,
  getDaysRemaining,
  getPortalClientFromCookies,
  isTrialExpired,
} from '@/lib/portal'

export default async function DashboardSettingsPage() {
  const client = await getPortalClientFromCookies()

  if (!client || isTrialExpired(client)) {
    redirect('/login')
  }

  const trialDaysRemaining = getDaysRemaining(client.trialExpiresAt)

  return (
    <div className='px-4 py-6 sm:px-6 lg:px-10 lg:py-10'>
      <div className='mx-auto max-w-4xl space-y-8'>
        <section className='space-y-3'>
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600'>
            Settings
          </p>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900'>Account settings</h1>
          <p className='text-base text-gray-600'>
            Review your portal access details and current ASE plan status.
          </p>
        </section>

        <section className='rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8'>
          <div className='grid gap-6 sm:grid-cols-2'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                Client name
              </p>
              <p className='mt-2 text-lg font-semibold text-gray-900'>{client.name}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                Email
              </p>
              <p className='mt-2 text-lg font-semibold text-gray-900'>{client.email}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                Plan type
              </p>
              <div className='mt-2 flex items-center gap-3'>
                <p className='text-lg font-semibold capitalize text-gray-900'>{client.plan}</p>
                {client.plan === 'live' ? (
                  <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700'>
                    Active Plan
                  </span>
                ) : null}
              </div>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-gray-500'>
                Trial status
              </p>
              {client.plan === 'trial' ? (
                <div className='mt-2 space-y-1 text-gray-900'>
                  <p className='text-lg font-semibold'>{formatDateTime(client.trialExpiresAt)}</p>
                  <p className='text-sm text-gray-600'>
                    {trialDaysRemaining} day{trialDaysRemaining === 1 ? '' : 's'} remaining
                  </p>
                </div>
              ) : (
                <p className='mt-2 text-lg font-semibold text-gray-900'>No trial restrictions</p>
              )}
            </div>
          </div>

          <div className='mt-8 border-t border-gray-100 pt-6'>
            <PortalLogoutButton className='rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60' />
          </div>
        </section>
      </div>
    </div>
  )
}
