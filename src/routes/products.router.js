import { Router } from "express";
import { getAllProducts, getProductById, searchProductsByName, createProduct, deleteProduct } from '../../Proyecto Final/src/controllers/product.controller.js';
import { auth } from "../../src/middlewares/auth.middleware.js";

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/search', searchProductsByName);

router.get('/products/:id', getProductById);

router.post('/products', auth, createProduct);

router.delete('/products/:id', auth, deleteProduct);

export default router;