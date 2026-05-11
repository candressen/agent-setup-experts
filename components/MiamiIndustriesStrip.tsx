export default function MiamiIndustriesStrip() {
  const industries = [
    '🌿 Landscaping', '🍽️ Restaurants', '🏠 Real Estate', '⚖️ Law Firms',
    '💉 Med Spas', '💇 Salons', '💪 Gyms', '📊 Accountants'
  ]
  return (
    <section className='border-y border-white/[0.06] bg-[#0d0d0d] py-4'>
      <div className='mx-auto max-w-5xl px-6'>
        <p className='mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/30'>
          Built for Miami businesses
        </p>
        <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2'>
          {industries.map(i => (
            <span key={i} className='text-sm text-white/50 hover:text-white/80 transition'>
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
