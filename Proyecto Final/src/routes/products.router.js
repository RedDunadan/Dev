import { Router } from "express";
import { getAllProducts, getProductById, searchProductsByName } from '../controllers/product.controller.js';

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/search', searchProductsByName);

router.get('/products/:id', getProductById);

export default router;