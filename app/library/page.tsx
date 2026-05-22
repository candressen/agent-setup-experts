import type { Metadata } from 'next'

import AgentLibraryClient from '@/components/library/AgentLibraryClient'
import { AGENT_LIBRARY } from '@/lib/agent-library'

export const metadata: Metadata = {
  title: 'AI Agent Library for Small Business | Agent Setup Experts',
  description:
    'Browse practical AI agents Agent Setup Experts can install for small businesses, including sales, operations, support, finance, recruiting, and executive workflows.',
}

export default function LibraryPage() {
  return (
    <>
      <section className='relative overflow-hidden bg-[#0a0a0a] px-6 py-20 md:py-28'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,rgba(0,0,0,0)_68%)] blur-3xl opacity-60' />
        </div>

        <div className='relative mx-auto max-w-[1200px]'>
          <div className='max-w-4xl'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.04] px-4 py-1.5'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#60a5fa]' />
              <span className='text-xs font-medium uppercase tracking-[0.22em] text-white/70'>
                ASE agent library
              </span>
            </div>

            <h1 className='max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl'>
              A practical catalog of AI agents we can set up for your business.
            </h1>
            <p className='mt-6 max-w-3xl text-lg leading-8 text-white/60 md:text-xl'>
              Browse installable workflows for sales, operations, support, finance, recruiting, and
              owner reporting. These are real setup patterns, not vague demos.
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              {[
                `${AGENT_LIBRARY.length}+ launch-ready agent setups`,
                'Role and industry filters',
                'Built to fit your actual tools and approvals',
              ].map((item) => (
                <div
                  key={item}
                  className='rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/65'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AgentLibraryClient />
    </>
  )
}
