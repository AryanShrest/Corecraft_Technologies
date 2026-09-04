import { z } from 'zod'

export const createProductSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  slug: z.string().min(2, 'Slug must be at least 2 characters').optional(),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.coerce.number().positive('Price must be positive'),
  stock: z.coerce.number().int().min(0, 'Stock must be 0 or greater'),
  images: z.array(z.string().url('Each image must be a valid URL')).optional(),
  categoryId: z.string().min(1, 'Category ID is required'),
})

export const updateProductSchema = createProductSchema.partial()

export const listProductsSchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
  search: z.string().optional(),
  categoryId: z.string().optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  sortBy: z.enum(['price', 'createdAt', 'name']).default('createdAt'),
  order: z.enum(['asc', 'desc']).default('desc'),
})

export type CreateProductInput = z.infer<typeof createProductSchema>
export type UpdateProductInput = z.infer<typeof updateProductSchema>
export type ListProductsInput = z.infer<typeof listProductsSchema>
