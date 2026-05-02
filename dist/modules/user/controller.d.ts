import { Request, Response, NextFunction } from "express";
export declare const signup: (req: Request, res: Response, next: NextFunction) => void;
export declare const login: (req: Request, res: Response, next: NextFunction) => void;
export declare const logout: (req: Request, res: Response, next: NextFunction) => void;
export declare const getProfile: (req: Request, res: Response, next: NextFunction) => void;
