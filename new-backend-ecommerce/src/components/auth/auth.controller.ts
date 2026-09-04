import type { Request, Response, NextFunction } from 'express'
import { authService } from './auth.service'
import { registerSchema, loginSchema, refreshSchema } from './auth.validation'

export const authController = {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = registerSchema.parse(req.body)
      const result = await authService.register(data)
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  },

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = loginSchema.parse(req.body)
      const result = await authService.login(data, res)
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },

  async refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = refreshSchema.parse({ refreshToken: req.cookies.refreshToken })
      const result = await authService.refresh(data.refreshToken, res)
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await authService.logout(res)
      res.status(200).json({ message: 'Logged out successfully' })
    } catch (err) {
      next(err)
    }
  },

  async me(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ message: 'Unauthorized' })
        return
      }
      const user = await authService.getCurrentUser(req.user.userId)
      res.status(200).json({ user })
    } catch (err) {
      next(err)
    }
  },
}
