import type { Response } from 'express'
import { env } from '../config/env'

export function setAuthCookies(
  res: Response,
  accessToken: string,
  refreshToken: string,
): void {
  const isProduction = env.NODE_ENV === 'production'

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
    maxAge: 15 * 60 * 1000,
    path: '/',
  })

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/api/auth/refresh',
  })
}

export function clearAuthCookies(res: Response): void {
  res.clearCookie('accessToken')
  res.clearCookie('refreshToken')
}
