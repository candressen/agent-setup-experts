'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  marketingChrome: ReactNode
  marketingFooter: ReactNode
}

const PORTAL_PATHS = ['/dashboard', '/login']

export default function PortalRouteDetector({ children, marketingChrome, marketingFooter }: Props) {
  const pathname = usePathname()
  const isPortal = PORTAL_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))

  if (isPortal) {
    return <>{children}</>
  }

  return (
    <>
      {marketingChrome}
      <main
        data-site-chrome='marketing-main'
        className='pt-[var(--mobile-site-top-offset)] md:pt-20'
      >
        {children}
      </main>
      {marketingFooter}
    </>
  )
}
