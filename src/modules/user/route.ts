import { Router } from 'express';

import { signup, login, getProfile, logout } from './controller';

import { signupValidation, loginValidation } from './validation';

import { authenticate } from '../../middlewares/auth';

import { validate } from '../../middlewares/validate';

const router = Router();

router.post('/signup', validate(signupValidation), signup);

router.post('/login', validate(loginValidation), login);

router.post('/logout', authenticate, logout);

router.get('/profile', authenticate, getProfile);

export default router;