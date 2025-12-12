import bcrypt from 'bcrypt';
import { createUser } from '../models/User.model.js';

export const register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: 'Email and password are required' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = createUser({ email, passwordHash });

    if (!user) {
        return res.status(503).json({ error: 'Error creating user' });
    }

    res.send('User registered successfully');
}