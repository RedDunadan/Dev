import * as Model from '../models/product.model.js';

export const getAllProducts = async (req, res) => {
    try {
        const {category} = req.query;
        const products = await Model.getAllProducts();
        
        if (category) {
            const filteredProducts = products.filter((item) => 
                item.categories && item.categories.includes(category)
            );
            return res.json(filteredProducts);
        }
        
        return res.json(products);
    } catch (error) {
        console.error('Error in getAllProducts:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const searchProductsByName = async (req, res) => {
    try {
        const {name} = req.query;

        if (!name) {
            return res.status(400).json({ error: 'Name query parameter is required' });
        }

        const products = await Model.getAllProducts();
        const filteredProducts = products.filter((item) => 
            item.name.toLowerCase().includes(name.toLowerCase())
        );

        if (filteredProducts.length === 0) {
            return res.status(404).json({ error: 'No products found matching the search criteria' });
        }

        return res.json(filteredProducts);
    } catch (error) {
        console.error('Error in searchProductsByName:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Model.getProductById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.json(product);
    } catch (error) {
        console.error('Error in getProductById:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}