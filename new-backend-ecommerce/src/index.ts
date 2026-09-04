import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { env } from './config/env'
import { logger } from './lib/logger'
import { apiLimiter } from './middlewares/rateLimit'
import { xssMiddleware } from './middlewares/xssMiddleware'
import { errorHandler, notFoundHandler } from './middlewares/errorHandler'
import { authRoutes } from './components/auth/auth.routes'
import { productRoutes } from './components/product/product.routes'
import { userRoutes } from './components/user/user.routes'
import { cartRoutes } from './components/cart/cart.routes'
import { orderRoutes } from './components/order/order.routes'
import { paymentRoutes } from './components/payment/payment.routes'

const app = express()

app.set('trust proxy', 1)

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
)
app.use(helmet())
app.use(morgan('combined', { stream: { write: (msg) => logger.http(msg.trim()) } }))
app.use(cookieParser())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(xssMiddleware)
app.use('/api/', apiLimiter)

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payments', paymentRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

const port = env.PORT
app.listen(port, () => {
  logger.info(`🚀 Server running in ${env.NODE_ENV} mode on port ${port}`)
})

export default app
