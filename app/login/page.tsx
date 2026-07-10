'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type LoginError = 'invalid' | 'rate_limit' | 'expired' | 'generic' | null

const errorMessages: Record<Exclude<LoginError, null>, string> = {
  invalid: 'Invalid credentials',
  rate_limit: 'Too many attempts, try again in 15 minutes',
  expired: 'Your trial has expired',
  generic: 'Unable to sign in right now. Please try again.',
}

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [isUsername, setIsUsername] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState<LoginError>(null)
  const [submitting, setSubmitting] = useState(false)

  const expired = searchParams.get('expired') === 'true'

  useEffect(() => {
    if (expired) {
      setError('expired')
    }
  }, [expired])

  const errorMessage = useMemo(() => (error ? errorMessages[error] : null), [error])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(expired ? 'expired' : null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: isUsername ? `${email}@ase.local` : email, password }),
      })

      if (response.ok) {
        router.replace('/dashboard')
        return
      }

      if (response.status === 401) {
        setError('invalid')
        return
      }

      if (response.status === 429) {
        setError('rate_limit')
        return
      }

      setError('generic')
    } catch {
      setError('generic')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.24),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur lg:block">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
              Agent Setup Experts
            </p>
            <h1 className="mt-6 max-w-md text-4xl font-semibold tracking-tight text-white">
              Client portal access for your live AI operations.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
              Review your active ASE setup, monitor agent output, and stay on top of what your
              business automations are doing without chasing status updates.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                Secure sign-in with a 7-day session
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                Trial accounts automatically respect expiration windows
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                Built for the ASE dashboard and client delivery portal
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_30px_80px_rgba(3,7,18,0.18)] sm:p-10">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
                ASE Portal
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Sign in to your dashboard
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Use your username or email and password to sign in.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                  Username or Email
                </label>
                <input
                  id="email"
                  type="text"
                  autoComplete="username"
                  value={email}
                  onChange={(event) => {
                    const val = event.target.value
                    setEmail(val)
                    setIsUsername(!val.includes('@'))
                  }}
                  className="h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-950 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                  placeholder="Username or email"
                  required
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-950 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {errorMessage ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
