import 'dotenv/config';
import { generateToken } from '../utils/token.generator.js';

const default_user = {
    id: 1,
    email: 'x@x.com',
    password: '1234'
}

export const login = (req, res) => {
    const { email, password } = req.body;
    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(default_user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}

