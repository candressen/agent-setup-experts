'use client'

import { COOKIE_CONSENT_KEY } from '@/lib/cookie-consent'

type AnalyticsPrimitive = string | number | boolean | null
export type AnalyticsProperties = Record<string, AnalyticsPrimitive | AnalyticsPrimitive[] | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

function hasAnalyticsConsent() {
  if (typeof document === 'undefined') {
    return false
  }

  return document.cookie
    .split('; ')
    .some((cookie) => cookie === `${COOKIE_CONSENT_KEY}=accepted`)
}

function sanitizeProperties(properties: AnalyticsProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  )
}

export function trackEvent(event: string, properties: AnalyticsProperties = {}) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    ...sanitizeProperties(properties),
  })
}
