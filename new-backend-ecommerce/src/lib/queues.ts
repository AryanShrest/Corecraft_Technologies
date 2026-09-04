import { Queue } from 'bullmq'
import { env } from '../config/env'
import { logger } from './logger'

const connection = {
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
}

export const emailQueue = new Queue('email-queue', {
  connection,
})

export const orderQueue = new Queue('order-queue', {
  connection,
})

emailQueue.on('error', (err) => logger.error('Email queue error:', err))
orderQueue.on('error', (err) => logger.error('Order queue error:', err))
