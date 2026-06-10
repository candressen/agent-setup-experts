import type { Metadata } from 'next'
import Link from 'next/link'

import { SITE } from '@/lib/constants'

const painPoints = [
  {
    title: 'Close More Leads',
    description:
      'Stop losing prospects to slow follow-up. AI handles outreach, follow-ups, and booking 24/7.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M4 16.5L9 11.5L13 15.5L20 8.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M15 8.5H20V13.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Cut Sales Admin Time',
    description:
      'Your reps should be selling, not data entry. AI logs calls, updates CRM, and drafts emails.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M8 4.75H16L19.25 8V19.25H8V4.75Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
        <path d='M16 4.75V8H19.25' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
        <path d='M11 12H16M11 15.5H16' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <path d='M5.5 8.5V18.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Streamline Operations',
    description:
      "Automate the handoffs, approvals, and recurring tasks eating your team's day.",
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <rect x='4.75' y='4.75' width='5.5' height='5.5' rx='1.25' stroke='currentColor' strokeWidth='1.8' />
        <rect x='13.75' y='4.75' width='5.5' height='5.5' rx='1.25' stroke='currentColor' strokeWidth='1.8' />
        <rect x='4.75' y='13.75' width='5.5' height='5.5' rx='1.25' stroke='currentColor' strokeWidth='1.8' />
        <path d='M10.25 7.5H13.75M7.5 10.25V13.75M10.25 16.5H15.5M15.5 16.5L14 15M15.5 16.5L14 18' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Never Miss a Customer',
    description:
      'AI answers inquiries, routes tickets, and resolves common issues, day or night.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M6.75 8.75C6.75 6.40279 8.65279 4.5 11 4.5H13C15.3472 4.5 17.25 6.40279 17.25 8.75V9.5C18.4926 9.5 19.5 10.5074 19.5 11.75V14.25C19.5 15.4926 18.4926 16.5 17.25 16.5H16L13.8 18.7C13.17 19.33 12.093 18.884 12.093 17.993V16.5H11C8.65279 16.5 6.75 14.5972 6.75 12.25V8.75Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
        <path d='M10 10.5H14M10 13H12.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Speed Up Finance & Admin',
    description:
      'Automate invoicing reminders, expense tracking, and report generation.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M6 6.5C6 5.67157 6.67157 5 7.5 5H17.5C18.3284 5 19 5.67157 19 6.5V17.5C19 18.3284 18.3284 19 17.5 19H7.5C6.67157 19 6 18.3284 6 17.5V6.5Z' stroke='currentColor' strokeWidth='1.8' />
        <path d='M9 10.5H16M9 14H13.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <path d='M4.5 8.5H6M4.5 12H6M4.5 15.5H6' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Grow Your Online Presence',
    description:
      'AI writes, schedules, and posts content across channels, consistently.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M12 5V19M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <circle cx='12' cy='12' r='7.25' stroke='currentColor' strokeWidth='1.8' />
        <path d='M7 7C9 9 15 15 17 17' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Hire Faster, Waste Less Time',
    description:
      'AI screens candidates, schedules interviews, and follows up, so HR is never the bottleneck.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <circle cx='9' cy='8' r='3.25' stroke='currentColor' strokeWidth='1.8' />
        <path d='M3.75 18.5C4.5 15.9 6.4 14.5 9 14.5C11.6 14.5 13.5 15.9 14.25 18.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <path d='M16 8.5H20M18 6.5V10.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Know Your Numbers Without Digging',
    description:
      'Get daily owner briefings, KPI summaries, and meeting recaps delivered automatically.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M5 18.5H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <path d='M7.5 16V11.5M12 16V7.5M16.5 16V9.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <path d='M7.5 11.5L12 7.5L16.5 9.5L19 6.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Stop Losing Deals to Slow Estimates',
    description:
      'AI follows up on open quotes and proposals before they go cold and competitors win.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M7 5.5H17L19 7.5V18.5H7V5.5Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
        <path d='M17 5.5V7.5H19' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
        <path d='M10 11H16M10 14.5H13.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        <path d='M4.5 8.5L5.8 9.8L8.5 7.1' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Get More Reviews Without Asking',
    description:
      'Automatically request reviews after every completed job while the experience is still fresh.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M12 4.75L14.24 9.29L19.25 10.02L15.62 13.56L16.48 18.55L12 16.19L7.52 18.55L8.38 13.56L4.75 10.02L9.76 9.29L12 4.75Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Run Better Ad Campaigns',
    description:
      'AI monitors your Google and Meta campaigns, flags spend issues, and surfaces next actions daily.',
    href: '/library',
    icon: (
      <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6' aria-hidden='true'>
        <path d='M5 17.5L10 12.5L13.5 16L19 9.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M15 9.5H19V13.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M5 6.5H11' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
      </svg>
    ),
  },
] as const

const steps = [
  {
    number: '01',
    title: 'We map your workflow',
    description: 'We find the bottlenecks, handoffs, and repetitive work slowing your team down.',
  },
  {
    number: '02',
    title: 'We build and install your agents',
    description: 'Your first working system is deployed in 48 hours and connected to the tools you already use.',
  },
  {
    number: '03',
    title: 'You run, we maintain',
    description: 'Your team stays focused on the work that matters while we keep the automation running cleanly.',
  },
] as const

export const metadata: Metadata = {
  title: 'Business Problems We Solve With AI | Agent Setup Experts',
  description:
    'Explore the sales, operations, support, finance, marketing, hiring, and reporting problems Agent Setup Experts helps small businesses solve with AI systems deployed in 48 hours.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Business Problems We Solve With AI | Agent Setup Experts',
    description:
      'Pick the business problem slowing your team down, then see how Agent Setup Experts can automate it with AI systems built around your workflow.',
    url: 'https://agentsetupexperts.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Problems We Solve With AI | Agent Setup Experts',
    description:
      'Pick the business problem slowing your team down, then see how Agent Setup Experts can automate it with AI systems built around your workflow.',
  },
}

export default function ServicesPage() {
  return (
    <main className='bg-[#0a0a0a] text-white'>
      <section className='relative overflow-hidden px-6 py-20 md:py-28'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,rgba(0,0,0,0)_68%)] blur-3xl opacity-60' />
        </div>

        <div className='relative mx-auto max-w-[1200px]'>
          <div className='max-w-4xl'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.04] px-4 py-1.5'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#60a5fa]' />
              <span className='text-xs font-medium uppercase tracking-[0.22em] text-white/70'>
                Solution-first AI setup for small business
              </span>
            </div>

            <h1 className='max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl'>
              What Problem Are You Solving?
            </h1>
            <p className='mt-6 max-w-3xl text-lg leading-8 text-white/60 md:text-xl'>
              We build AI agents that handle the work your team shouldn&apos;t be doing. Pick your
              biggest pain point.
            </p>

            <div className='mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
              <a
                href='#how-it-works'
                className='rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white shadow-[0_0_10px_rgba(59,130,246,0.3)] transition hover:bg-[#1d4ed8] hover:shadow-[0_0_14px_rgba(59,130,246,0.4)]'
              >
                See how it works
              </a>
              <div className='flex flex-wrap gap-3'>
                {['Deployed in 48 hours', 'Built around your workflow', 'Maintained by ASE'].map(
                  (item) => (
                    <div
                      key={item}
                      className='rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/65'
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 pb-10 pt-4 md:pb-16'>
        <div className='mx-auto max-w-[1200px]'>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {painPoints.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className='group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-200 hover:border-[#2563EB]/50 hover:bg-white/[0.05]'
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60a5fa]'>
                  {item.icon}
                </div>
                <h2 className='mt-5 text-2xl font-semibold tracking-tight text-white'>
                  {item.title}
                </h2>
                <p className='mt-3 text-base leading-7 text-white/60'>{item.description}</p>
                <span className='mt-6 inline-flex items-center text-sm font-medium text-[#60a5fa] transition group-hover:text-white'>
                  Explore solution →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id='how-it-works' className='px-6 py-20 md:py-24'>
        <div className='mx-auto max-w-[1200px]'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.22em] text-[#60a5fa]'>
              How it works
            </p>
            <h2 className='mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl'>
              Fast launch, clear handoff, ongoing support.
            </h2>
          </div>

          <div className='mt-12 grid gap-5 lg:grid-cols-3'>
            {steps.map((step) => (
              <div
                key={step.number}
                className='rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-7'
              >
                <span className='text-sm font-semibold tracking-[0.22em] text-[#60a5fa]'>
                  {step.number}
                </span>
                <h3 className='mt-4 text-2xl font-semibold text-white'>{step.title}</h3>
                <p className='mt-3 text-base leading-7 text-white/60'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 pb-24 pt-4 md:pb-28'>
        <div className='mx-auto max-w-[1200px]'>
          <div className='relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-10 md:px-10 md:py-12'>
            <div className='pointer-events-none absolute right-0 top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-3xl' />
            <div className='relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
              <div className='max-w-2xl'>
                <p className='text-sm font-medium uppercase tracking-[0.22em] text-[#60a5fa]'>
                  Need help choosing?
                </p>
                <h2 className='mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl'>
                  Not sure which solution fits?
                </h2>
                <p className='mt-4 text-lg leading-8 text-white/60'>
                  Browse our full Agent Library or book a free call and we&apos;ll map the right setup
                  to your team.
                </p>
              </div>

              <div className='flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='/library'
                  className='inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-6 py-4 text-base font-semibold text-white transition hover:bg-white/[0.08]'
                >
                  Browse Agent Library
                </Link>
                <a
                  href={SITE.calendlyUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]'
                >
                  Book a Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
