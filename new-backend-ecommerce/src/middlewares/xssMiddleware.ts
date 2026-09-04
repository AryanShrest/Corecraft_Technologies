import type { Request, Response, NextFunction } from 'express'

export function xssMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  if (req.body) {
    req.body = sanitizeObject(req.body)
  }
  if (req.query) {
    req.query = sanitizeObject(req.query) as typeof req.query
  }
  if (req.params) {
    req.params = sanitizeObject(req.params) as typeof req.params
  }
  next()
}

function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = value
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+="[^"]*"/gi, '')
    } else if (typeof value === 'object' && value !== null) {
      result[key] = sanitizeObject(value as Record<string, unknown>)
    } else {
      result[key] = value
    }
  }
  return result as T
}
