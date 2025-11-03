export const getAllProducts = (req, res) => {
    const {category} = req.query;
    if (category) {
        const filteredProducts = products.filter((item) => item.categories.includes(category));
        res.json(filteredProducts);
        return;
    } else {
        res.json(products);
    }
}