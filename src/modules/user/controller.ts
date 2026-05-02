import { Request, Response, NextFunction } from "express";

import { UserService } from "./service";

import { asyncHandler } from "../../utils/asyncHandler";

import ApiResponse from "../../utils/ApiResponse";

export const signup = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { user, token } = await UserService.signup(req.body);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
  res.status(201).json(new ApiResponse(201, "User created successfully", { user, token }));
});

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { user, token } = await UserService.login(req.body);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
  res.status(200).json(new ApiResponse(200, "Login successful", { user, token }));
});

export const logout = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.clearCookie("token");
  res.status(200).json(new ApiResponse(200, "Logout successful"));
})

export const getProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as any).user.id;
  const user = await UserService.getProfile(userId);
  res.status(200).json(new ApiResponse(200, "Profile retrieved successfully", user));
});
