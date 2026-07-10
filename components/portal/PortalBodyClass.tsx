'use client'

import { useEffect } from 'react'

type PortalBodyClassProps = {
  className: string
}

export default function PortalBodyClass({ className }: PortalBodyClassProps) {
  useEffect(() => {
    document.body.classList.add(className)

    return () => {
      document.body.classList.remove(className)
    }
  }, [className])

  return null
}
