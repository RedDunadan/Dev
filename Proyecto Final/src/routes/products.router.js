import { Router } from "express";
import { getAllProducts, getProductById, searchProductsByName, createProduct, deleteProduct } from '../controllers/product.controller.js';

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/search', searchProductsByName);

router.get('/products/:id', getProductById);

router.post('/products', createProduct);

router.delete('/products/:id', deleteProduct);

export default router;