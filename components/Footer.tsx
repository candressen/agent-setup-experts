import Link from 'next/link'

import { NAV_LINKS, SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-lg font-semibold text-white">{SITE.name}</div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 transition hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div>© 2026 Agent Setup Experts. All rights reserved.</div>
          <div>
            {SITE.location} · {SITE.email}
          </div>
        </div>
      </div>
    </footer>
  )
}
