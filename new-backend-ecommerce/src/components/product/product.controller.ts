import type { Request, Response, NextFunction } from 'express'
import { productService } from './product.service'
import { createProductSchema, updateProductSchema, listProductsSchema } from './product.validation'

export const productController = {
  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const query = listProductsSchema.parse(req.query)
      const result = await productService.list(query)
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },

  async detail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const product = await productService.detail(req.params.id)
      res.status(200).json({ product })
    } catch (err) {
      next(err)
    }
  },

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = createProductSchema.parse(req.body)
      const product = await productService.create(data)
      res.status(201).json({ product })
    } catch (err) {
      next(err)
    }
  },

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = updateProductSchema.parse(req.body)
      const product = await productService.update(req.params.id, data)
      res.status(200).json({ product })
    } catch (err) {
      next(err)
    }
  },

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await productService.remove(req.params.id)
      res.status(200).json({ message: 'Product deleted successfully' })
    } catch (err) {
      next(err)
    }
  },
}
