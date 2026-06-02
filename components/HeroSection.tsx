'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HOME_ANNOUNCEMENT_TEXT, SITE } from '@/lib/constants'
import useObservedHeightCssVariable from '@/components/useObservedHeightCssVariable'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const announcementRef = useRef<HTMLDivElement>(null)

  useObservedHeightCssVariable(announcementRef, '--mobile-announcement-height')

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]'>
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

      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,rgba(0,0,0,0)_60%)] blur-2xl opacity-50' />
      </div>

      <motion.div
        className='relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-24 text-center md:px-8'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className='mb-4 hidden items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.04] px-4 py-1.5 md:inline-flex'
        >
          <span className='h-1.5 w-1.5 rounded-full bg-[#60a5fa]' />
          <span className='text-xs font-medium uppercase tracking-[0.22em] text-white/70'>
            Miami AI setup, library-first, first workflows live in 48 hours
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className='mb-6 mx-auto max-w-[780px] tracking-tight text-white'
        >
          <span className='block text-5xl font-semibold leading-[1.05] text-white md:text-6xl'>Launch ASE Library</span>
          <span className='block text-5xl font-semibold leading-[1.05] text-white md:text-6xl'>Agents for Your</span>
          <span className='block text-5xl font-semibold leading-[1.05] text-white md:text-6xl'>Business.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className='mx-auto mb-6 mt-4 max-w-2xl text-base leading-[1.6] text-white/60 md:text-lg'
        >
          Start with 5 or 10 install-ready library agents, or go unlimited with custom builds. We
          handle strategy, setup, integrations, and launch so your first workflows go live fast and
          the broader system expands cleanly from there.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className='mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2'
        >
          {['5, 10, or unlimited agents', 'Monthly financing available', 'Equipment starts at $400', 'Built for small business'].map((b) => (
            <span key={b} className='flex items-center gap-1.5 text-sm text-white/60'>
              <span className='text-[#60a5fa]'>✓</span> {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className='flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-center'
        >
          <a
            href={SITE.calendlyUrl}
            target='_blank'
            rel='noreferrer'
            className='rounded-xl bg-[#2563EB] px-10 py-4 text-base font-semibold text-white shadow-[0_0_10px_rgba(59,130,246,0.3)] transition hover:bg-[#1d4ed8] hover:shadow-[0_0_14px_rgba(59,130,246,0.4)]'
          >
            Book Your Free Strategy Call
          </a>
          <Link href='/library' className='text-sm text-white/60 transition hover:text-white'>
            Browse the library
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
