import { Router } from 'express'
import { authController } from './auth.controller'
import { authLimiter } from '../../middlewares/rateLimit'
import { authMiddleware } from '../../middlewares/authMiddleware'

export const authRoutes = Router()

authRoutes.post('/register', authLimiter, authController.register)
authRoutes.post('/login', authLimiter, authController.login)
authRoutes.post('/refresh', authController.refresh)
authRoutes.post('/logout', authMiddleware, authController.logout)
authRoutes.get('/me', authMiddleware, authController.me)
