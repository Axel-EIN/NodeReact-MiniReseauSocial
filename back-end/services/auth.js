import jwt from 'jsonwebtoken'
import { ENV } from '../config/env.js';
import { createError } from '../services/error.js';

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token)
        return next(createError(401, "Acces Denied"));

    jwt.verify(token, ENV.TOKEN, (err, user) => {
        if (err) {
            return next(createError(403, { message: "Token non valide !", error: err.message }))
        }
        req.user = user;
        next();
    })
}

export default verifyToken;