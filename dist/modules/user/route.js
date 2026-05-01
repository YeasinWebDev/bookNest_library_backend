import { Router } from 'express';
import { signup, login, getProfile } from './controller.js';
import { signupValidation, loginValidation } from './validation.js';
import { authenticate } from '../../middlewares/auth.js';
import { validate } from '../../middlewares/validate.js';
const router = Router();
router.post('/signup', validate(signupValidation), signup);
router.post('/login', validate(loginValidation), login);
router.get('/profile', authenticate, getProfile);
export default router;
//# sourceMappingURL=route.js.map