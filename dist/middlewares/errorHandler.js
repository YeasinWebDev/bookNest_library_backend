"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const ApiResponse_js_1 = __importDefault(require("../utils/ApiResponse.js"));
const env_js_1 = require("../config/env.js");
const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    if (env_js_1.config.NODE_ENV === 'development') {
        console.error(err);
    }
    res.status(statusCode).json(new ApiResponse_js_1.default(statusCode, message, null));
};
exports.errorHandler = errorHandler;
