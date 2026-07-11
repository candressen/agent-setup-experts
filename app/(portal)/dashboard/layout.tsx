import { redirect } from 'next/navigation'

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
      <DashboardShell clientName={client.name}>{children}</DashboardShell>
    </>
  )
}
