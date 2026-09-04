import bcrypt from 'bcryptjs'
import type { Response } from 'express'
import { prisma } from '../../lib/db'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../../lib/jwt'
import { setAuthCookies, clearAuthCookies } from '../../utils/auth-cookies'
import { AppError } from '../../middlewares/errorHandler'
import type { RegisterInput, LoginInput } from './auth.validation'

export const authService = {
  async register(input: RegisterInput) {
    const existing = await prisma.user.findUnique({ where: { email: input.email } })
    if (existing) {
      throw new AppError('Email already registered', 409)
    }

    const hashedPassword = await bcrypt.hash(input.password, 12)

    const user = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashedPassword,
      },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    })

    return { user, message: 'Registration successful' }
  },

  async login(input: LoginInput, res: Response) {
    const user = await prisma.user.findUnique({ where: { email: input.email } })
    if (!user) {
      throw new AppError('Invalid credentials', 401)
    }

    const valid = await bcrypt.compare(input.password, user.password)
    if (!valid) {
      throw new AppError('Invalid credentials', 401)
    }

    const accessToken = signAccessToken({ userId: user.id, role: user.role })
    const refreshToken = signRefreshToken({ userId: user.id, role: user.role })

    setAuthCookies(res, accessToken, refreshToken)

    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }
  },

  async refresh(token: string, res: Response) {
    try {
      const payload = verifyRefreshToken(token)
      const user = await prisma.user.findUnique({ where: { id: payload.userId } })
      if (!user) {
        throw new AppError('Invalid refresh token', 401)
      }

      const accessToken = signAccessToken({ userId: user.id, role: user.role })
      const refreshToken = signRefreshToken({ userId: user.id, role: user.role })

      setAuthCookies(res, accessToken, refreshToken)

      return { accessToken }
    } catch {
      throw new AppError('Invalid or expired refresh token', 401)
    }
  },

  async logout(res: Response) {
    clearAuthCookies(res)
  },

  async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    })
    if (!user) {
      throw new AppError('User not found', 404)
    }
    return user
  },
}
