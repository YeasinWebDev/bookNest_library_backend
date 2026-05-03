"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const auth_1 = require("../../middlewares/auth");
const validate_1 = require("../../middlewares/validate");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post('/signup', (0, validate_1.validate)(validation_1.signupValidation), controller_1.signup);
exports.userRoutes.post('/login', (0, validate_1.validate)(validation_1.loginValidation), controller_1.login);
exports.userRoutes.post('/logout', auth_1.authenticate, controller_1.logout);
exports.userRoutes.get('/profile', auth_1.authenticate, controller_1.getProfile);
//# sourceMappingURL=route.js.map