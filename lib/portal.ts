import { cookies } from 'next/headers'

import { AUTH_COOKIE_NAME, type JWTPayload, verifyToken } from '@/lib/auth'

export type PortalClient = JWTPayload

export async function getPortalClientFromCookies(): Promise<PortalClient | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value

  if (!token) {
    return null
  }

  return verifyToken(token)
}

export function isTrialExpired(client: PortalClient) {
  return (
    client.plan === 'trial' &&
    typeof client.trialExpiresAt === 'string' &&
    new Date(client.trialExpiresAt).getTime() < Date.now()
  )
}

export function getDaysRemaining(trialExpiresAt: string | null) {
  if (!trialExpiresAt) {
    return null
  }

  const expiry = new Date(trialExpiresAt).getTime()
  const diff = expiry - Date.now()

  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

export function formatRelativeTime(value: string | null | undefined) {
  if (!value) {
    return 'Never'
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return 'Unknown'
  }

  const diffSeconds = Math.round((date.getTime() - Date.now()) / 1000)
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const intervals = [
    { unit: 'year', seconds: 60 * 60 * 24 * 365 },
    { unit: 'month', seconds: 60 * 60 * 24 * 30 },
    { unit: 'week', seconds: 60 * 60 * 24 * 7 },
    { unit: 'day', seconds: 60 * 60 * 24 },
    { unit: 'hour', seconds: 60 * 60 },
    { unit: 'minute', seconds: 60 },
  ] as const

  for (const interval of intervals) {
    if (Math.abs(diffSeconds) >= interval.seconds) {
      return rtf.format(Math.round(diffSeconds / interval.seconds), interval.unit)
    }
  }

  return 'Just now'
}

export function formatDateTime(value: string | null | undefined) {
  if (!value) {
    return 'Never'
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return 'Unknown'
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}
