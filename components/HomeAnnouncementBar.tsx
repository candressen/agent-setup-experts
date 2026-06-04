'use client'

import { useRef } from 'react'

import { HOME_ANNOUNCEMENT_TEXT } from '@/lib/constants'
import useObservedHeightCssVariable from '@/components/useObservedHeightCssVariable'

export default function HomeAnnouncementBar() {
  const announcementRef = useRef<HTMLDivElement>(null)

  useObservedHeightCssVariable(announcementRef, '--mobile-announcement-height')

  return (
    <div
      ref={announcementRef}
      data-home-announcement
      className='fixed inset-x-0 z-[50] border-b border-[#2563EB]/20 bg-[rgba(10,14,24,0.94)] backdrop-blur-[12px] md:hidden'
      style={{ top: 'var(--mobile-header-height)' }}
    >
      <div className='mx-auto max-w-[1200px] px-6 py-2.5'>
        <p className='text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80'>
          {HOME_ANNOUNCEMENT_TEXT}
        </p>
      </div>
    </div>
  )
}
