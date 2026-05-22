'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useCallback, useState } from 'react'

import {
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_MAX_AGE,
  GA_ID,
  GTM_ID,
  type CookieConsentValue,
} from '@/lib/cookie-consent'

type CookieConsentProps = {
  initialConsent: CookieConsentValue | null
}

export default function CookieConsent({ initialConsent }: CookieConsentProps) {
  const [consent, setConsent] = useState<CookieConsentValue | null>(initialConsent)

  const updateConsent = useCallback((value: CookieConsentValue) => {
    document.cookie = `${COOKIE_CONSENT_KEY}=${value}; path=/; max-age=${COOKIE_CONSENT_MAX_AGE}; SameSite=Lax`
    setConsent(value)
  }, [])

  return (
    <>
      {consent === 'accepted' ? (
        <>
          <Script
            id='gtm-loader'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
          <Script id='ga4' strategy='afterInteractive'>
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      ) : null}

      {consent === null ? (
        <div className='fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6'>
          <div className='mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 bg-[rgba(10,10,10,0.96)] p-5 shadow-2xl shadow-black/40 backdrop-blur md:flex-row md:items-end md:justify-between'>
            <div className='max-w-2xl'>
              <p className='text-sm font-semibold text-white'>We use cookies to improve the site and marketing performance.</p>
              <p className='mt-2 text-sm leading-6 text-white/70'>
                We only enable analytics after you say yes. See our{' '}
                <Link href='/privacy-policy' className='text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white'>
                  privacy policy
                </Link>
                .
              </p>
            </div>

            <div className='flex flex-col gap-2 sm:flex-row'>
              <button
                type='button'
                onClick={() => updateConsent('declined')}
                className='rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white'
              >
                Only necessary
              </button>
              <button
                type='button'
                onClick={() => updateConsent('accepted')}
                className='rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1D4ED8]'
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
