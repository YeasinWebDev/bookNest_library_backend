import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

import ApiError from '../utils/ApiError.js';

import { config } from '../config/env.js';

interface AuthRequest extends Request {
  user?: any;
}
 
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization') || req.cookies.token;

  if (!token) {
    throw new ApiError(401, 'Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    throw new ApiError(401, 'Invalid token.');
  }
};