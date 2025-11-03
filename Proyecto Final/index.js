import express from 'express';
import notFound from './src/middlewares/notFound.js';
import productsRouter from './src/routes/products.router.js';

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    res.json({ message: 'Middleware active' });
    console.log(req.method, req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', productsRouter)

app.use(notFound);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 Server Error');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});