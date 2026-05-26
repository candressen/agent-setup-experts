import Link from 'next/link'

export default function LibraryAgentNotFound() {
  return (
    <section className='bg-[#0a0a0a] px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.24)] md:p-12'>
        <div className='text-[11px] font-medium uppercase tracking-[0.24em] text-[#60a5fa]'>ASE agent library</div>
        <h1 className='mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl'>Agent page not found</h1>
        <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60'>
          That library detail page does not exist, or the link may be outdated. Head back to the full library to keep browsing install-ready agent workflows.
        </p>

        <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
          <Link
            href='/library'
            className='rounded-xl bg-[#2563EB] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1d4ed8]'
          >
            Back to library
          </Link>
          <Link
            href='/contact'
            className='rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white/75 transition hover:border-white/30 hover:text-white'
          >
            Contact ASE
          </Link>
        </div>
      </div>
    </section>
  )
}
