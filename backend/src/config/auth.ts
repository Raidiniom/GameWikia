import { createRemoteJWKSet, jwtVerify } from 'jose'

const JWKS = createRemoteJWKSet(
  new URL('https://andnetfockmfantlwsiy.supabase.co/auth/v1/.well-known/jwks.json')
)

export async function verifyJWT(token: string) {
  const { payload } = await jwtVerify(token, JWKS, {
    issuer: 'https://andnetfockmfantlwsiy.supabase.co/auth/v1',
    audience: 'authenticated',
  })

  return payload
}
