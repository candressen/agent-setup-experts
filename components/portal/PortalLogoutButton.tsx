'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type PortalLogoutButtonProps = {
  className?: string
  label?: string
}

export default function PortalLogoutButton({
  className = '',
  label = 'Logout',
}: PortalLogoutButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogout() {
    setIsLoading(true)

    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.replace('/login')
      router.refresh()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      type='button'
      onClick={handleLogout}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? 'Signing out...' : label}
    </button>
  )
}
