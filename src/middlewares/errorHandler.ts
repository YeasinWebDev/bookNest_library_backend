import { Request, Response, NextFunction } from 'express';

import ApiError from '../utils/ApiError.js';

import ApiResponse from '../utils/ApiResponse.js';

import { config } from '../config/env.js';

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  if (config.NODE_ENV === 'development') {
    console.error(err);
  }

  res.status(statusCode).json(new ApiResponse(statusCode, message, null));
};