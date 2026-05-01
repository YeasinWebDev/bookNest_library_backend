import { Request, Response, NextFunction } from 'express';

import { UserService } from './service.js';

import { asyncHandler } from '../../utils/asyncHandler.js';

import ApiResponse from '../../utils/ApiResponse.js';

export const signup = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { user, token } = await UserService.signup(req.body);
  res.status(201).json(new ApiResponse(201, 'User created successfully', { user, token }));
});

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { user, token } = await UserService.login(req.body);
  res.status(200).json(new ApiResponse(200, 'Login successful', { user, token }));
});

export const getProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as any).user.id;
  const user = await UserService.getProfile(userId);
  res.status(200).json(new ApiResponse(200, 'Profile retrieved successfully', user));
});