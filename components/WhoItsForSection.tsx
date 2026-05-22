'use client'

import { useState, type ChangeEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const INDUSTRY_MAP: Record<string, { label: string; useCases: { title: string; description: string }[] }> = {
  agency: {
    label: 'Marketing Agency',
    useCases: [
      { title: 'Automated Client Reporting', description: 'AI agents pull data from ad platforms and generate weekly client reports automatically — no manual exports.' },
      { title: 'Lead Follow-Up at Scale', description: 'Agents respond to inbound leads within minutes, qualify them, and book calls without your team lifting a finger.' },
      { title: 'Content Brief Generation', description: 'Brief new content pieces automatically from keyword lists and past performance data.' },
    ],
  },
  law: {
    label: 'Law Firm',
    useCases: [
      { title: 'Client Intake Automation', description: 'AI agents collect intake forms, categorize matter types, and route new clients to the right attorney automatically.' },
      { title: 'Document Workflow', description: 'Automate document assembly, review checklists, and deadline tracking without manual coordination.' },
      { title: 'Client Communication', description: 'Send status updates, appointment reminders, and follow-ups automatically throughout the matter lifecycle.' },
    ],
  },
  'real estate': {
    label: 'Real Estate',
    useCases: [
      { title: 'Instant Lead Response', description: 'Agents respond to listing inquiries 24/7, qualify buyers and sellers, and schedule showings automatically.' },
      { title: 'CRM Auto-Update', description: 'Every call, email, and showing automatically logged to your CRM — no manual data entry.' },
      { title: 'Pipeline Follow-Up', description: 'Automated follow-up sequences keep cold leads warm without your agents spending time on manual outreach.' },
    ],
  },
  consultant: {
    label: 'Consulting Firm',
    useCases: [
      { title: 'Proposal Automation', description: 'Generate first-draft proposals from a brief using AI — cut proposal time from hours to minutes.' },
      { title: 'Research Summarization', description: 'Agents monitor industry news, summarize key developments, and deliver briefs to your team daily.' },
      { title: 'Client Onboarding', description: 'Automate onboarding questionnaires, kickoff scheduling, and document collection for new engagements.' },
    ],
  },
  restaurant: {
    label: 'Restaurant',
    useCases: [
      { title: 'Reservation Follow-Up', description: 'Agents send automated confirmations, reminders, and post-visit review requests to every guest.' },
      { title: 'Inventory Alerts', description: 'Monitor inventory levels and trigger purchase orders or alerts when stock drops below threshold.' },
      { title: 'Staff Scheduling', description: 'AI agents help draft schedules based on historical demand, reducing manager time spent on logistics.' },
    ],
  },
  ecommerce: {
    label: 'E-Commerce',
    useCases: [
      { title: 'Order & Support Automation', description: 'Handle order status questions, returns, and common support tickets automatically — 24/7.' },
      { title: 'Abandoned Cart Recovery', description: 'Agents trigger personalized follow-up sequences for abandoned carts without manual setup.' },
      { title: 'Supplier Coordination', description: 'Automate reorder requests, shipping confirmations, and supplier communication workflows.' },
    ],
  },
  healthcare: {
    label: 'Healthcare',
    useCases: [
      { title: 'Appointment Reminders', description: 'Automated reminders reduce no-shows and free up front-desk staff from manual outreach.' },
      { title: 'Patient Intake', description: 'Collect intake forms, insurance details, and consent documents before the appointment automatically.' },
      { title: 'Referral Coordination', description: 'Agents track referral status, send follow-ups, and keep referring providers updated automatically.' },
    ],
  },
  finance: {
    label: 'Financial Services',
    useCases: [
      { title: 'Client Onboarding', description: 'Automate KYC document collection, account setup tasks, and welcome sequences for new clients.' },
      { title: 'Report Generation', description: 'AI agents compile portfolio summaries, performance reports, and compliance docs on schedule.' },
      { title: 'Meeting Prep', description: 'Agents pull account data, recent activity, and news relevant to each client before advisor meetings.' },
    ],
  },
}

const KEYWORD_MAP: Record<string, string> = {
  agency: 'agency',
  marketing: 'agency',
  'ad agency': 'agency',
  advertising: 'agency',
  pr: 'agency',
  law: 'law',
  lawyer: 'law',
  attorney: 'law',
  legal: 'law',
  'law firm': 'law',
  litigation: 'law',
  'real estate': 'real estate',
  realtor: 'real estate',
  broker: 'real estate',
  property: 'real estate',
  realty: 'real estate',
  consultant: 'consultant',
  consulting: 'consultant',
  advisory: 'consultant',
  strategy: 'consultant',
  restaurant: 'restaurant',
  cafe: 'restaurant',
  bar: 'restaurant',
  hospitality: 'restaurant',
  food: 'restaurant',
  ecommerce: 'ecommerce',
  'e-commerce': 'ecommerce',
  shop: 'ecommerce',
  store: 'ecommerce',
  retail: 'ecommerce',
  healthcare: 'healthcare',
  medical: 'healthcare',
  clinic: 'healthcare',
  dental: 'healthcare',
  doctor: 'healthcare',
  health: 'healthcare',
  finance: 'finance',
  financial: 'finance',
  wealth: 'finance',
  accounting: 'finance',
  bookkeeping: 'finance',
  insurance: 'finance',
}

function findMatch(query: string): string | null {
  const q = query.toLowerCase().trim()
  if (!q) return null

  for (const [keyword, key] of Object.entries(KEYWORD_MAP)) {
    if (q.includes(keyword) || keyword.includes(q)) return key
  }

  return null
}

export default function WhoItsForSection() {
  const [query, setQuery] = useState('')
  const [matchKey, setMatchKey] = useState<string | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setQuery(val)
    setMatchKey(findMatch(val))
  }

  const match = matchKey ? INDUSTRY_MAP[matchKey] : null

  return (
    <section id='who-its-for' className='bg-[#0a0a0a] px-6 py-28'>
      <div className='mx-auto max-w-[1200px]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-16 text-center'
        >
          <div className='mb-4 text-xs uppercase tracking-[0.2em] text-white/40'>WHO WE HELP</div>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>Built for Businesses Like Yours</h2>
          <p className='mx-auto mt-4 max-w-xl text-lg text-white/50'>
            Type your business type and see how AI can automate your workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mx-auto max-w-xl'
        >
          <div className='relative'>
            <input
              type='text'
              value={query}
              onChange={handleChange}
              placeholder='e.g. law firm, marketing agency, real estate...'
              className='w-full rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-base text-white placeholder-white/30 outline-none transition focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30'
            />
            <div className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/20'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='11' cy='11' r='8' />
                <path d='m21 21-4.35-4.35' />
              </svg>
            </div>
          </div>

          <div className='mt-3 flex flex-wrap gap-2'>
            {['Agency', 'Law Firm', 'Real Estate', 'Restaurant', 'E-Commerce'].map((label) => (
              <button
                key={label}
                type='button'
                onClick={() => {
                  setQuery(label)
                  setMatchKey(findMatch(label))
                }}
                className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/50 transition hover:border-white/20 hover:text-white/80'
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode='wait'>
          {match ? (
            <motion.div
              key={matchKey}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className='mx-auto mt-12 max-w-[1200px]'
            >
              <p className='mb-6 text-center text-sm text-white/40'>
                How AI works for <span className='font-medium text-white/70'>{match.label}</span>
              </p>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {match.useCases.map((uc, i) => (
                  <motion.div
                    key={uc.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className='rounded-2xl border border-white/10 bg-[#111] p-6'
                  >
                    <div className='mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[#2563EB]/20 bg-[#2563EB]/10'>
                      <span className='text-xs font-bold text-[#2563EB]'>0{i + 1}</span>
                    </div>
                    <h3 className='mb-2 text-base font-semibold text-white'>{uc.title}</h3>
                    <p className='text-sm leading-relaxed text-white/60'>{uc.description}</p>
                  </motion.div>
                ))}
              </div>
              <p className='mt-8 text-center text-xs text-white/30'>
                These are example automations. Your specific setup is scoped on the strategy call.
              </p>
            </motion.div>
          ) : query.length > 2 ? (
            <motion.div
              key='no-match'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className='mt-12 text-center text-sm text-white/30'
            >
              No use cases mapped yet for that industry — book a call and we will scope it for you.
            </motion.div>
          ) : (
            <motion.div
              key='empty'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-3'
            >
              {['Marketing Agency', 'Law Firm', 'Real Estate'].map((name) => (
                <div key={name} className='rounded-2xl border border-white/6 bg-white/[0.02] p-6 opacity-40'>
                  <div className='mb-3 h-8 w-8 rounded-lg border border-white/8 bg-white/5' />
                  <div className='mb-2 h-4 w-2/3 rounded bg-white/5' />
                  <div className='h-3 w-full rounded bg-white/5' />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
