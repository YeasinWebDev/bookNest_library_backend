import { Request, Response, NextFunction } from 'express';

import ApiError from '../utils/ApiError.js';

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const error = new ApiError(404, `Not Found - ${req.originalUrl}`);
  next(error);
};