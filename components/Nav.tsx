'use client'

import Image from 'next/image'
import Link from 'next/link'

import { NAV_LINKS, SITE } from '@/lib/constants'

export default function Nav() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[rgba(10,10,10,0.92)] backdrop-blur-[12px]'>
      <div className='mx-auto max-w-[1200px] px-6 py-3'>
        <div className='flex items-center justify-between gap-4'>
          <Link href='/' aria-label={SITE.name} className='flex items-center gap-2'>
            <Image
              src='/logos/robot-icon.svg'
              alt=''
              width={28}
              height={28}
              className='h-32 w-32 flex-shrink-0 brightness-0 invert'
              priority
            />
            <span className='whitespace-nowrap text-base font-semibold tracking-tight text-white'>
              Agent Setup <span className='text-[#2563EB]'>Experts</span>
            </span>
          </Link>

          <div className='hidden items-center gap-3 md:flex'>
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
