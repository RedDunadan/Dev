import { Router } from "express";
import { getAllProducts, getProductById, searchProductsByName, createProduct, deleteProduct } from '../controllers/products.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/search', searchProductsByName);

router.get('/products/:id', getProductById);

router.post('/products', auth, createProduct);

router.delete('/products/:id', auth, deleteProduct);

export default router;