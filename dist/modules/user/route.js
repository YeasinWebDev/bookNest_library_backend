import { Router } from 'express';
import { signup, login, getProfile, logout } from './controller';
import { signupValidation, loginValidation } from './validation';
import { authenticate } from '../../middlewares/auth';
import { validate } from '../../middlewares/validate';
export const userRoutes = Router();
userRoutes.post('/signup', validate(signupValidation), signup);
userRoutes.post('/login', validate(loginValidation), login);
userRoutes.post('/logout', authenticate, logout);
userRoutes.get('/profile', authenticate, getProfile);
//# sourceMappingURL=route.js.map