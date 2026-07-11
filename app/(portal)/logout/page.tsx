import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AUTH_COOKIE_NAME } from '@/lib/auth'

export default async function LogoutPage() {
  const cookieStore = await cookies()
  cookieStore.set({
    name: AUTH_COOKIE_NAME,
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })

  redirect('/login')
}
