export type RecommendationItem = {
  id: string
  text: string
  timestamp: string
  priority?: 'high' | 'medium' | 'low'
}

export type RecommendationFeedProps = {
  items: RecommendationItem[]
  className?: string
}

const PRIORITY_BADGE: Record<string, string> = {
  high: 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200',
  medium: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  low: 'bg-slate-100 text-slate-600',
}

export default function RecommendationFeed({ items, className = '' }: RecommendationFeedProps) {
  return (
    <section className={['portal-card', className].filter(Boolean).join(' ')}>
      <div className='mb-6'>
        <div className='flex items-center gap-2.5'>
          <span className='flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-300'>
            <svg aria-hidden='true' className='h-4 w-4' viewBox='0 0 16 16' fill='none'>
              <path d='M8 2a4.5 4.5 0 0 1 2.121 8.47l-.121.072V12H6v-1.458l-.121-.072A4.5 4.5 0 0 1 8 2Z' stroke='currentColor' strokeWidth='1.4' strokeLinejoin='round' />
              <path d='M6.5 13.5h3M7.25 15h1.5' stroke='currentColor' strokeWidth='1.4' strokeLinecap='round' />
            </svg>
          </span>
          <div>
            <h3 className='text-lg font-semibold text-slate-950'>Recommendations</h3>
            <p className='text-sm text-slate-500'>Personalized suggestions from your ASE concierge.</p>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        {items.length === 0 ? (
          <div className='rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-sm text-slate-500'>
            No recommendations yet — check back after your first agent run.
          </div>
        ) : (
          items.map((item) => {
            const priority = item.priority ?? 'medium'
            return (
              <article
                key={item.id}
                className='relative rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-white p-5 shadow-sm'
              >
                <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                  <div className='flex items-start gap-3'>
                    <span className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-[10px] font-bold'>
                      ✦
                    </span>
                    <p className='text-sm font-medium leading-6 text-slate-800'>{item.text}</p>
                  </div>
                  <div className='flex shrink-0 items-center gap-2'>
                    <span className={['rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize', PRIORITY_BADGE[priority]].join(' ')}>
                      {priority} priority
                    </span>
                    <time className='text-xs font-medium uppercase tracking-[0.14em] text-slate-400'>
                      {item.timestamp}
                    </time>
                  </div>
                </div>
              </article>
            )
          })
        )}
      </div>
    </section>
  )
}
