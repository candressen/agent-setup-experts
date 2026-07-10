import { SignJWT, jwtVerify } from 'jose'

export const AUTH_COOKIE_NAME = 'ase_portal_token'

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export interface JWTPayload {
  clientId: string
  email: string
  name: string
  plan: 'live' | 'trial'
  trialExpiresAt: string | null
}

export async function signToken(payload: JWTPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as unknown as JWTPayload
  } catch {
    return null
  }
}
