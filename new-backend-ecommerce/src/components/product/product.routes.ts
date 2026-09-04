import { Router } from 'express'
import { productController } from './product.controller'
import { authMiddleware, requireRole } from '../../middlewares/authMiddleware'

export const productRoutes = Router()

productRoutes.get('/', productController.list)
productRoutes.get('/:id', productController.detail)
productRoutes.post('/', authMiddleware, requireRole('admin'), productController.create)
productRoutes.put('/:id', authMiddleware, requireRole('admin'), productController.update)
productRoutes.delete('/:id', authMiddleware, requireRole('admin'), productController.remove)
