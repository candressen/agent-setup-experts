'use client'

import { useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { NAV_LINKS, SERVICES_NAV, SITE } from '@/lib/constants'
import useObservedHeightCssVariable from '@/components/useObservedHeightCssVariable'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useObservedHeightCssVariable(navRef, '--mobile-header-height')

  return (
    <nav
      ref={navRef}
      className='fixed top-0 left-0 right-0 z-[60] border-b border-white/5 bg-[rgba(10,10,10,0.92)] backdrop-blur-[12px]'
    >
      <div className='mx-auto max-w-[1200px] px-6 py-3'>
        <div className='flex items-center justify-between gap-4'>
          <Link href='/' aria-label={SITE.name} className='flex items-center gap-2'>
            <Image
              src='/logos/robot-icon.svg'
              alt=''
              width={28}
              height={28}
              className='h-7 w-7 flex-shrink-0 brightness-0 invert'
              priority
            />
            <span className='whitespace-nowrap text-base font-semibold tracking-tight text-white'>
              Agent Setup <span className='text-[#2563EB]'>Experts</span>
            </span>
          </Link>

          <div className='hidden items-center gap-3 md:flex'>
            <div className='relative group'>
              <Link
                href={SERVICES_NAV.href}
                className='flex items-center gap-1 whitespace-nowrap pb-2 text-sm text-white/70 transition hover:text-white'
              >
                {SERVICES_NAV.label}
                <svg className='h-3 w-3 opacity-50' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </Link>
              <div className='absolute left-0 top-full z-50 hidden min-w-[160px] rounded-lg border border-white/10 bg-[#0f0f0f] py-1 shadow-xl group-hover:block'>
                {SERVICES_NAV.children.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='block px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='whitespace-nowrap text-sm text-white/70 transition hover:text-white'
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={SITE.calendlyUrl}
              target='_blank'
              rel='noreferrer'
              className='ml-1 whitespace-nowrap rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/5 hover:text-white'
            >
              Book a Call
            </Link>
          </div>
        </div>

        <div className='mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden'>
          <Link
            href={SERVICES_NAV.href}
            className='whitespace-nowrap rounded-full border border-[#2563EB]/30 bg-[#2563EB]/12 px-3 py-1.5 text-sm font-medium text-white transition hover:border-[#2563EB]/50 hover:bg-[#2563EB]/18'
          >
            {SERVICES_NAV.label}
          </Link>
          {SERVICES_NAV.children.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70 transition hover:border-white/20 hover:text-white'
            >
              {link.label}
            </Link>
          ))}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70 transition hover:border-white/20 hover:text-white'
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SITE.calendlyUrl}
            target='_blank'
            rel='noreferrer'
            className='whitespace-nowrap rounded-full border border-[#2563EB]/30 bg-[#2563EB]/12 px-3 py-1.5 text-sm font-medium text-white'
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  )
}
