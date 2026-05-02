"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_js_1 = require("./controller.js");
const validation_js_1 = require("./validation.js");
const auth_js_1 = require("../../middlewares/auth.js");
const validate_js_1 = require("../../middlewares/validate.js");
const router = (0, express_1.Router)();
router.post('/signup', (0, validate_js_1.validate)(validation_js_1.signupValidation), controller_js_1.signup);
router.post('/login', (0, validate_js_1.validate)(validation_js_1.loginValidation), controller_js_1.login);
router.post('/logout', auth_js_1.authenticate, controller_js_1.logout);
router.get('/profile', auth_js_1.authenticate, controller_js_1.getProfile);
exports.default = router;
//# sourceMappingURL=route.js.map