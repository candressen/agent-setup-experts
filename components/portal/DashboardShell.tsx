'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import PortalLogoutButton from '@/components/portal/PortalLogoutButton'

type DashboardShellProps = {
  clientName: string
  children: ReactNode
}

type NavItem = {
  label: string
  href: string
  match: (pathname: string) => boolean
  icon: ReactNode
}

function OverviewIcon() {
  return (
    <svg aria-hidden='true' className='h-5 w-5' viewBox='0 0 20 20' fill='none'>
      <path
        d='M3.333 10.833 10 4.167l6.667 6.666v5.834a.833.833 0 0 1-.834.833h-3.333V12.5H7.5v5H4.167a.833.833 0 0 1-.834-.833v-5.834Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}

function AgentsIcon() {
  return (
    <svg aria-hidden='true' className='h-5 w-5' viewBox='0 0 20 20' fill='none'>
      <path
        d='M6.667 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6.666 1.667a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Zm-6.666 1.25c-2.302 0-4.167 1.492-4.167 3.333V15h8.334v-1.25c0-1.841-1.865-3.333-4.167-3.333Zm6.666.833c-1.023 0-1.954.291-2.666.771.537.558.875 1.24.963 1.98H17.5v-.417c0-1.289-1.791-2.334-4.167-2.334Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg aria-hidden='true' className='h-5 w-5' viewBox='0 0 20 20' fill='none'>
      <path
        d='M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m16.035 11.305-.693-.4a1.667 1.667 0 0 1-.812-1.443c0-.568.31-1.09.812-1.443l.693-.4a.833.833 0 0 0 .305-1.138l-1.11-1.923a.834.834 0 0 0-1.099-.35l-.705.322a1.667 1.667 0 0 1-1.645-.132 1.667 1.667 0 0 1-.833-1.425V2.5a.833.833 0 0 0-.833-.833H8.885a.833.833 0 0 0-.833.833v.817c0 .595-.316 1.145-.83 1.442a1.667 1.667 0 0 1-1.648.115l-.674-.344a.833.833 0 0 0-1.111.317L2.64 6.77a.833.833 0 0 0 .306 1.138l.693.4c.5.353.81.875.81 1.443 0 .568-.31 1.09-.81 1.443l-.693.4a.833.833 0 0 0-.306 1.138l1.11 1.923a.833.833 0 0 0 1.099.35l.705-.322a1.667 1.667 0 0 1 1.645.132c.514.298.833.848.833 1.425v.817c0 .46.373.833.833.833h2.23a.833.833 0 0 0 .833-.833v-.817c0-.595.316-1.145.83-1.442a1.667 1.667 0 0 1 1.648-.115l.674.344a.833.833 0 0 0 1.111-.317l1.149-1.923a.833.833 0 0 0-.305-1.138Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.2'
      />
    </svg>
  )
}

const navItems: NavItem[] = [
  {
    label: 'Overview',
    href: '/dashboard',
    match: (pathname) => pathname === '/dashboard',
    icon: <OverviewIcon />,
  },
  {
    label: 'Agents',
    href: '/dashboard#agents',
    match: (pathname) => pathname.startsWith('/dashboard/agents'),
    icon: <AgentsIcon />,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    match: (pathname) => pathname.startsWith('/dashboard/settings'),
    icon: <SettingsIcon />,
  },
]

function SidebarContent({
  pathname,
  clientName,
  onNavigate,
}: {
  pathname: string
  clientName: string
  onNavigate?: () => void
}) {
  return (
    <div className='flex h-full flex-col'>
      <div className='border-b border-white/10 px-6 py-7'>
        <p className='text-xs font-semibold uppercase tracking-[0.28em] text-slate-400'>
          ASE Portal
        </p>
        <p className='mt-3 text-2xl font-semibold tracking-tight text-white'>{clientName}</p>
        <p className='mt-2 text-sm text-slate-400'>Operational dashboard and delivery portal.</p>
      </div>

      <nav className='flex-1 px-4 py-6'>
        <div className='space-y-2'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              data-active={item.match(pathname)}
              className='portal-sidebar-link'
              onClick={onNavigate}
            >
              <span className='shrink-0'>{item.icon}</span>
              <span className='text-sm font-medium'>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className='border-t border-white/10 px-4 py-4'>
        <PortalLogoutButton
          className='flex min-h-11 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60'
        />
      </div>
    </div>
  )
}

export default function DashboardShell({ clientName, children }: DashboardShellProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className='portal-shell min-h-screen lg:flex'>
      <aside className='portal-sidebar hidden h-screen w-60 shrink-0 lg:fixed lg:inset-y-0 lg:left-0 lg:block'>
        <SidebarContent clientName={clientName} pathname={pathname} />
      </aside>

      <div className='lg:ml-60 lg:min-h-screen lg:flex-1'>
        <header className='sticky top-0 z-30 border-b border-slate-200/70 bg-gray-50/95 backdrop-blur lg:hidden'>
          <div className='flex items-center justify-between px-4 py-4 sm:px-6'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
                ASE Portal
              </p>
              <p className='mt-1 text-lg font-semibold text-slate-950'>{clientName}</p>
            </div>
            <button
              type='button'
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className='flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm'
              aria-expanded={isMobileMenuOpen}
              aria-label='Toggle navigation'
            >
              <svg aria-hidden='true' className='h-5 w-5' viewBox='0 0 20 20' fill='none'>
                <path
                  d='M3.333 5.833h13.334M3.333 10h13.334M3.333 14.167h13.334'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='1.6'
                />
              </svg>
            </button>
          </div>
        </header>

        {isMobileMenuOpen ? (
          <div className='fixed inset-0 z-40 bg-slate-950/50 lg:hidden'>
            <button
              type='button'
              aria-label='Close navigation'
              className='absolute inset-0'
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <aside className='portal-sidebar absolute inset-y-0 left-0 w-72 max-w-[86vw] shadow-2xl'>
              <SidebarContent
                clientName={clientName}
                pathname={pathname}
                onNavigate={() => setIsMobileMenuOpen(false)}
              />
            </aside>
          </div>
        ) : null}

        <main className='min-h-screen bg-gray-50'>{children}</main>
      </div>
    </div>
  )
}
