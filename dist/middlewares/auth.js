"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ApiError_js_1 = __importDefault(require("../utils/ApiError.js"));
const env_js_1 = require("../config/env.js");
const authenticate = (req, res, next) => {
    const token = req.header('Authorization') || req.cookies.token;
    if (!token) {
        throw new ApiError_js_1.default(401, 'Access denied. No token provided.');
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_js_1.config.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        throw new ApiError_js_1.default(401, 'Invalid token.');
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.js.map