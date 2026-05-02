"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const ApiError_js_1 = __importDefault(require("../utils/ApiError.js"));
const notFound = (req, res, next) => {
    const error = new ApiError_js_1.default(404, `Not Found - ${req.originalUrl}`);
    next(error);
};
exports.notFound = notFound;
