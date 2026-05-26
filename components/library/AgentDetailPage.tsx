import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import type { AgentLibraryItem } from '@/lib/agent-library'
import { SITE } from '@/lib/constants'

function DetailSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section className='rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] md:p-8'>
      <div className='text-[11px] font-medium uppercase tracking-[0.22em] text-[#60a5fa]'>{eyebrow}</div>
      <h2 className='mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl'>{title}</h2>
      <div className='mt-4'>{children}</div>
    </section>
  )
}

export default function AgentDetailPage({ agent }: { agent: AgentLibraryItem }) {
  return (
    <>
      <section className='relative overflow-hidden bg-[#0a0a0a] px-6 py-16 md:py-24'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute left-1/2 top-20 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.24)_0%,rgba(0,0,0,0)_70%)] blur-3xl opacity-70' />
        </div>

        <div className='relative mx-auto max-w-[1200px]'>
          <Link
            href='/library'
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/65 transition hover:border-white/20 hover:text-white'
          >
            <span aria-hidden='true'>←</span>
            Back to library
          </Link>

          <div className='mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start'>
            <div>
              <div className='inline-flex rounded-full border border-[#2563EB]/25 bg-[#2563EB]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#93c5fd]'>
                {agent.role}
              </div>
              <h1 className='mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl'>
                {agent.name}
              </h1>
              <p className='mt-5 max-w-3xl text-lg leading-8 text-white/60 md:text-xl'>{agent.description}</p>
              <p className='mt-4 max-w-3xl text-base leading-7 text-white/48'>{agent.summary}</p>

              <div className='mt-8 flex flex-wrap gap-3'>
                {agent.industries.map((industry) => (
                  <span
                    key={`${agent.slug}-${industry}`}
                    className='rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60'
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)]'>
              <div className='flex items-start gap-4'>
                <div className='relative h-[88px] w-[88px] overflow-hidden rounded-[24px] border border-white/10 bg-[#101010]'>
                  <Image src={agent.image} alt={`${agent.name} icon`} fill sizes='88px' className='object-cover' />
                </div>
                <div>
                  <div className='text-sm font-medium text-white/75'>Install-ready agent workflow</div>
                  <p className='mt-2 text-sm leading-6 text-white/55'>
                    ASE can tailor this agent to your current tools, handoff rules, and approval points.
                  </p>
                </div>
              </div>

              <div className='mt-6 space-y-3'>
                <a
                  href={SITE.calendlyUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='block rounded-2xl bg-[#2563EB] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1d4ed8]'
                >
                  Book a strategy call
                </a>
                <Link
                  href='/contact'
                  className='block rounded-2xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/75 transition hover:border-white/30 hover:text-white'
                >
                  Ask about this agent
                </Link>
              </div>

              <div className='mt-6 grid gap-3 sm:grid-cols-2'>
                <div className='rounded-2xl border border-white/8 bg-black/20 p-4'>
                  <div className='text-[11px] font-medium uppercase tracking-[0.18em] text-white/35'>Best for</div>
                  <ul className='mt-3 space-y-2'>
                    {agent.bestFor.map((item) => (
                      <li key={`${agent.slug}-best-${item}`} className='flex gap-2 text-sm leading-6 text-white/60'>
                        <span className='text-[#60a5fa]'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='rounded-2xl border border-white/8 bg-black/20 p-4'>
                  <div className='text-[11px] font-medium uppercase tracking-[0.18em] text-white/35'>Connects to</div>
                  <div className='mt-3 flex flex-wrap gap-2'>
                    {agent.connectsTo.map((item) => (
                      <span
                        key={`${agent.slug}-connect-${item}`}
                        className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55'
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#0a0a0a] px-6 pb-16 md:pb-24'>
        <div className='mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[1fr_1fr]'>
          <DetailSection eyebrow='What it does' title='Practical day-to-day job'>
            <div className='space-y-4 max-w-2xl text-sm leading-7 text-white/62 md:text-base'>
              <p>{agent.description}</p>
              <p className='text-white/50'>{agent.summary}</p>
            </div>
          </DetailSection>

          <DetailSection eyebrow='Workflow fit' title='Where it fits in the process'>
            <p className='max-w-2xl text-sm leading-7 text-white/62 md:text-base'>{agent.workflowFit}</p>
          </DetailSection>

          <DetailSection eyebrow='Common triggers' title='Inputs that usually start the workflow'>
            <ul className='grid gap-3 md:grid-cols-1'>
              {agent.commonTriggers.map((item) => (
                <li key={`${agent.slug}-trigger-${item}`} className='rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-white/60'>
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection eyebrow='Outputs' title='What the agent produces'>
            <ul className='space-y-3'>
              {agent.delivers.map((item) => (
                <li key={`${agent.slug}-deliver-${item}`} className='flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-white/60'>
                  <span className='text-[#60a5fa]'>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DetailSection>
        </div>
      </section>

      <section className='border-t border-white/8 bg-[#0f0f0f] px-6 py-16'>
        <div className='mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
          <div>
            <div className='text-[11px] font-medium uppercase tracking-[0.22em] text-[#60a5fa]'>Who it is best for</div>
            <h2 className='mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl'>
              Teams that want a cleaner handoff, faster follow-through, and fewer dropped steps
            </h2>
          </div>

          <div className='rounded-[28px] border border-white/10 bg-[#0a0a0a] p-7'>
            <div className='flex flex-wrap gap-3'>
              {agent.bestFor.map((item) => (
                <span
                  key={`${agent.slug}-fit-${item}`}
                  className='rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60'
                >
                  {item}
                </span>
              ))}
            </div>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <a
                href={SITE.calendlyUrl}
                target='_blank'
                rel='noreferrer'
                className='rounded-xl bg-[#2563EB] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1d4ed8]'
              >
                Talk through your setup
              </a>
              <Link
                href='/library'
                className='rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/75 transition hover:border-white/30 hover:text-white'
              >
                Back to the full library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
