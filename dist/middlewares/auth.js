import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import { config } from '../config/env.js';
export const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        throw new ApiError(401, 'Access denied. No token provided.');
    }
    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        throw new ApiError(401, 'Invalid token.');
    }
};
//# sourceMappingURL=auth.js.map