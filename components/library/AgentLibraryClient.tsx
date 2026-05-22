'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import {
  AGENT_INDUSTRY_FILTERS,
  AGENT_LIBRARY,
  AGENT_ROLE_FILTERS,
  type AgentIndustry,
  type AgentRole,
} from '@/lib/agent-library'
import { SITE } from '@/lib/constants'

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? 'border-[#2563EB]/60 bg-[#2563EB]/15 text-white'
          : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}

export default function AgentLibraryClient() {
  const [role, setRole] = useState<'All' | AgentRole>('All')
  const [industry, setIndustry] = useState<'All' | AgentIndustry>('All')
  const [query, setQuery] = useState('')

  const filteredAgents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return AGENT_LIBRARY.filter((agent) => {
      const matchesRole = role === 'All' || agent.role === role
      const matchesIndustry = industry === 'All' || agent.industries.includes(industry)
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [agent.name, agent.description, agent.role, ...agent.industries]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)

      return matchesRole && matchesIndustry && matchesQuery
    })
  }, [industry, query, role])

  return (
    <>
      <section className='border-y border-white/8 bg-[#0f0f0f]'>
        <div className='mx-auto max-w-[1200px] px-6 py-6'>
          <div className='grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end'>
            <div>
              <div className='mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#60a5fa]'>
                Browse the catalog
              </div>
              <h2 className='text-2xl font-semibold tracking-tight text-white md:text-3xl'>
                Practical agent setups your business can actually use
              </h2>
              <p className='mt-3 max-w-3xl text-sm leading-6 text-white/60 md:text-base'>
                Every setup can be tailored to your tools, inboxes, forms, CRM, and operating style.
                We install the workflow, connect the systems, and keep human approval where it belongs.
              </p>
            </div>

            <label className='block'>
              <span className='mb-2 block text-sm text-white/55'>Search agents</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Search by name, role, or industry'
                className='w-full min-w-0 rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#2563EB]/50 lg:min-w-[320px]'
              />
            </label>
          </div>

          <div className='mt-6 grid gap-5 md:grid-cols-2'>
            <div>
              <div className='mb-3 text-sm font-medium text-white/75'>Role</div>
              <div className='flex flex-wrap gap-2'>
                <FilterChip active={role === 'All'} label='All roles' onClick={() => setRole('All')} />
                {AGENT_ROLE_FILTERS.map((item) => (
                  <FilterChip
                    key={item}
                    active={role === item}
                    label={item}
                    onClick={() => setRole(item)}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className='mb-3 text-sm font-medium text-white/75'>Industry</div>
              <div className='flex flex-wrap gap-2'>
                <FilterChip
                  active={industry === 'All'}
                  label='All industries'
                  onClick={() => setIndustry('All')}
                />
                {AGENT_INDUSTRY_FILTERS.map((item) => (
                  <FilterChip
                    key={item}
                    active={industry === item}
                    label={item}
                    onClick={() => setIndustry(item)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-5 text-sm text-white/55'>
            <p>
              Showing <span className='text-white'>{filteredAgents.length}</span> of{' '}
              <span className='text-white'>{AGENT_LIBRARY.length}</span> installable agents.
            </p>
            {(role !== 'All' || industry !== 'All' || query.trim()) && (
              <button
                type='button'
                onClick={() => {
                  setRole('All')
                  setIndustry('All')
                  setQuery('')
                }}
                className='text-[#60a5fa] transition hover:text-white'
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className='bg-[#0a0a0a] px-6 py-12 md:py-16'>
        <div className='mx-auto max-w-[1200px]'>
          <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
            {filteredAgents.map((agent) => (
              <article
                key={agent.slug}
                className='group rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition hover:border-white/20 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]'
              >
                <div className='mb-4 flex items-start gap-4'>
                  <div className='relative h-[72px] w-[72px] overflow-hidden rounded-2xl border border-white/10 bg-[#101010]'>
                    <Image
                      src={agent.image}
                      alt={`${agent.name} icon`}
                      fill
                      sizes='72px'
                      className='object-cover'
                    />
                  </div>

                  <div className='min-w-0 flex-1'>
                    <div className='mb-2 inline-flex rounded-full border border-[#2563EB]/25 bg-[#2563EB]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#93c5fd]'>
                      {agent.role}
                    </div>
                    <h3 className='text-xl font-semibold tracking-tight text-white'>{agent.name}</h3>
                  </div>
                </div>

                <p className='text-sm leading-6 text-white/65'>{agent.description}</p>

                <div className='mt-5 flex flex-wrap gap-2'>
                  {agent.industries.map((item) => (
                    <span
                      key={`${agent.slug}-${item}`}
                      className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className='rounded-3xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-14 text-center'>
              <h3 className='text-xl font-semibold text-white'>No exact matches yet</h3>
              <p className='mx-auto mt-3 max-w-xl text-sm leading-6 text-white/60'>
                Try another role, broaden the industry, or book a call and we can map a custom setup to
                your workflow.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className='border-t border-white/8 bg-[#0f0f0f] px-6 py-16'>
        <div className='mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
          <div>
            <div className='mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#60a5fa]'>
              How ASE uses this catalog
            </div>
            <h2 className='text-3xl font-semibold tracking-tight text-white md:text-4xl'>
              Pick a starting point, then we install it around your real workflow
            </h2>
            <p className='mt-4 max-w-2xl text-base leading-7 text-white/60'>
              This library is not a pile of generic prompts. It is a menu of proven business workflows we can
              set up, connect, test, and hand off cleanly. Most client projects start with one or two agents,
              then expand once the first automations are live.
            </p>
          </div>

          <div className='rounded-3xl border border-white/10 bg-[#0a0a0a] p-7'>
            <div className='space-y-4'>
              {[
                'Connect email, forms, CRM, calendar, and internal docs',
                'Set review rules, escalation paths, and approval checkpoints',
                'Launch a practical v1 first, then expand based on usage',
              ].map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <span className='mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB]/15 text-sm text-[#93c5fd]'>
                    ✓
                  </span>
                  <p className='text-sm leading-6 text-white/65'>{item}</p>
                </div>
              ))}
            </div>

            <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
              <a
                href={SITE.calendlyUrl}
                target='_blank'
                rel='noreferrer'
                className='rounded-xl bg-[#2563EB] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1d4ed8]'
              >
                Book a strategy call
              </a>
              <Link
                href='/contact'
                className='rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/75 transition hover:border-white/30 hover:text-white'
              >
                Ask about your use case
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
