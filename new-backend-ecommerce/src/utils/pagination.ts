export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginationResult<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export function getPaginationParams(query: {
  page?: string
  limit?: string
}): PaginationParams {
  const page = Math.max(1, Number(query.page) || 1)
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 10))
  return { page, limit }
}

export function buildPaginationResult<T>(
  data: T[],
  total: number,
  { page, limit }: PaginationParams,
): PaginationResult<T> {
  const totalPages = Math.ceil(total / limit)
  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  }
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
