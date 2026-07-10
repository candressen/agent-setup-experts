'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AuthClient {
  clientId: string
  email: string
  name: string
  plan: 'live' | 'trial'
  trialExpiresAt: string | null
}

export function useAuth() {
  const [client, setClient] = useState<AuthClient | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/auth/me')
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        setClient(data?.client ?? null)
        setLoading(false)
      })
      .catch(() => {
        setClient(null)
        setLoading(false)
      })
  }, [])

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  return { client, loading, logout }
}
