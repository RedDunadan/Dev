import 'dotenv/config';
import express from 'express';
import notFound from './Proyecto Final/src/middlewares/notFound.js';
import productsRouter from './src/routes/products.router.js';
import cors from 'cors';
import authRouter from './src/routes/auth.router.js';


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3003;

app.use('/api/auth', authRouter);

app.use(cors());

app.use((req, res, next) => {
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