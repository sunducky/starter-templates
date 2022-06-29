import { Auth } from '../models/auth.model';
const jwt = require('jsonwebtoken');

export function generateToken(user: Auth): string {
    const payload = {
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().getTime() + 1000 * 60 * 60
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
}
