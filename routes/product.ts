import { Router } from 'express';
import { default as productController } from '../controllers/product.controller';

export const productRouter = Router();

productRouter.get('/', productController.getProducts);
productRouter.post('/category', productController.getProductsByCategory);
productRouter.post('/', productController.addProduct);