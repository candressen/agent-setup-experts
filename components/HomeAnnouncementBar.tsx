import { HOME_ANNOUNCEMENT_TEXT } from '@/lib/constants'

export default function HomeAnnouncementBar() {
  return (
    <div
      data-home-announcement
      className='sticky top-[var(--mobile-header-height)] z-[50] border-b border-[#2563EB]/20 bg-[rgba(10,14,24,0.94)] backdrop-blur-[12px] md:hidden'
    >
      <div className='mx-auto max-w-[1200px] px-6 py-2.5'>
        <p className='text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80'>
          {HOME_ANNOUNCEMENT_TEXT}
        </p>
      </div>
    </div>
  )
}
