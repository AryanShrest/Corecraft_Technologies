import { prisma } from '../../lib/db'
import { AppError } from '../../middlewares/errorHandler'
import { getPaginationParams, buildPaginationResult, slugify } from '../../utils/pagination'
import type { CreateProductInput, UpdateProductInput, ListProductsInput } from './product.validation'

export const productService = {
  async list(query: ListProductsInput) {
    const { page, limit } = getPaginationParams(query)

    const where: Record<string, unknown> = {}
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
      ]
    }
    if (query.categoryId) {
      where.categoryId = query.categoryId
    }
    if (query.minPrice || query.maxPrice) {
      where.price = {}
      if (query.minPrice) (where.price as Record<string, number>).gte = Number(query.minPrice)
      if (query.maxPrice) (where.price as Record<string, number>).lte = Number(query.maxPrice)
    }

    const orderBy: Record<string, 'asc' | 'desc'> = { [query.sortBy]: query.order }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy,
        include: { category: true },
      }),
      prisma.product.count({ where }),
    ])

    return buildPaginationResult(products, total, { page, limit })
  },

  async detail(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    })
    if (!product) {
      throw new AppError('Product not found', 404)
    }
    return product
  },

  async create(input: CreateProductInput) {
    const slug = input.slug ?? slugify(input.name)

    const existing = await prisma.product.findUnique({ where: { slug } })
    if (existing) {
      throw new AppError('Product slug already exists', 409)
    }

    return prisma.product.create({
      data: { ...input, slug },
      include: { category: true },
    })
  },

  async update(id: string, input: UpdateProductInput) {
    const existing = await prisma.product.findUnique({ where: { id } })
    if (!existing) {
      throw new AppError('Product not found', 404)
    }

    const data: typeof input & { slug?: string } = { ...input }
    if (input.name && !input.slug) {
      data.slug = slugify(input.name)
    }

    return prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    })
  },

  async remove(id: string) {
    const existing = await prisma.product.findUnique({ where: { id } })
    if (!existing) {
      throw new AppError('Product not found', 404)
    }
    await prisma.product.delete({ where: { id } })
  },
}
