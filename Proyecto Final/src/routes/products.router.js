import { Router } from "express";

const router = Router();

router.get('/products', (req, res) => {
    res.send('Products List');
});

router.get('/products', );

router.get('/products/search', (req, res) => {
    const {name} = req.query;

    if (!name) {
        res.status(400).send('Name query parameter is required');
        return;
    }
    const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    res.json(filteredProducts);

    if (filteredProducts.length === 0) {
        res.status(404).send('No products found matching the search criteria');
    }
});

router.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((item) => item.id == id);

    if (!product) {
        res.status(404).send('Product not found');
    }

    res.send(`Product Details for ID: ${id}`);
});