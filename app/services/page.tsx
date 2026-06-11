import type { Metadata } from 'next'
import Link from 'next/link'

import ServicesGrid from '@/components/services/ServicesGrid'
import { SITE } from '@/lib/constants'

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
          <ServicesGrid />
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
