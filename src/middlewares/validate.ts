import { Request, Response, NextFunction } from 'express';

import { z } from 'zod';

import ApiError from '../utils/ApiError.js';

export const validate = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.errors.map(err => err.message).join(', ');
      throw new ApiError(400, errors);
    }
    next();
  };
};