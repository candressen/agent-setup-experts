'use client'

import { useEffect, useState } from 'react'

const SESSION_KEY = 'ase-lead-magnet-popup-seen'

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.sessionStorage.getItem(SESSION_KEY) === 'true') {
      return
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => window.clearTimeout(timer)
  }, [])

  const markSeen = () => {
    window.sessionStorage.setItem(SESSION_KEY, 'true')
  }

  const handleClose = () => {
    markSeen()
    setIsOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }

    try {
      setIsSubmitting(true)
      setError('')

      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      markSeen()
      setIsSuccess(true)
    } catch {
      setError('Something went wrong. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className='fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm'
      onClick={handleClose}
      aria-hidden='true'
    >
      <div
        className='relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 text-left shadow-2xl shadow-black/50 sm:p-8'
        onClick={(event) => event.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='lead-magnet-popup-title'
      >
        <button
          type='button'
          onClick={handleClose}
          className='absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0f0f0f]'
          aria-label='Close popup'
        >
          <span className='text-xl leading-none'>×</span>
        </button>

        {isSuccess ? (
          <div className='pr-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]'>Free guide unlocked</p>
            <h2 id='lead-magnet-popup-title' className='mt-3 text-2xl font-semibold text-white'>
              ✅ Check your inbox! The guide is on its way.
            </h2>
            <p className='mt-3 text-sm leading-6 text-white/60'>
              Your download link will live here soon. For now, this is a placeholder while we wire up delivery.
            </p>
            <a
              href='#'
              className='mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10'
            >
              Download link coming soon
            </a>
          </div>
        ) : (
          <>
            <div className='pr-8'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]'>Free guide</p>
              <h2 id='lead-magnet-popup-title' className='mt-3 text-3xl font-semibold leading-tight text-white'>
                Free Guide: Build Your Email Manager AI Agent
              </h2>
              <p className='mt-3 text-sm leading-6 text-white/60'>
                Download our step-by-step guide and reclaim 4+ hours a week.
              </p>
            </div>

            <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
              <label htmlFor='lead-magnet-email' className='sr-only'>
                Email address
              </label>
              <input
                id='lead-magnet-email'
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='your@email.com'
                autoComplete='email'
                required
                className='h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-base text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#2563EB]'
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#2563EB] px-4 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] disabled:cursor-not-allowed disabled:opacity-70'
              >
                {isSubmitting ? 'Sending...' : 'Send Me the Free Guide →'}
              </button>

              <p className='text-center text-xs text-white/60'>No spam. Unsubscribe anytime.</p>

              {error ? <p className='text-sm text-red-300'>{error}</p> : null}
            </form>
          </>
        )}
      </div>
    </div>
  )
}
