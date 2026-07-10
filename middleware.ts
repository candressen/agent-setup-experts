import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { AUTH_COOKIE_NAME } from '@/lib/auth'

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/dashboard')) {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      const { payload } = await jwtVerify(token, secret)

      if (payload.plan === 'trial' && payload.trialExpiresAt) {
        const expiry = new Date(payload.trialExpiresAt as string)
        if (expiry < new Date()) {
          return NextResponse.redirect(new URL('/login?expired=true', request.url))
        }
      }

      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  if (pathname === '/login') {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value

    if (token) {
      try {
        await jwtVerify(token, secret)
        return NextResponse.redirect(new URL('/dashboard', request.url))
      } catch {}
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}
