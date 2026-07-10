import { redirect } from 'next/navigation'

import PortalBodyClass from '@/components/portal/PortalBodyClass'
import DashboardShell from '@/components/portal/DashboardShell'
import { getPortalClientFromCookies, isTrialExpired } from '@/lib/portal'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const client = await getPortalClientFromCookies()

  if (!client || isTrialExpired(client)) {
    redirect('/login')
  }

  return (
    <>
      <PortalBodyClass className='portal-body portal-dashboard-route' />
      <DashboardShell clientName={client.name}>{children}</DashboardShell>
    </>
  )
}
