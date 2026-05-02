"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.logout = exports.login = exports.signup = void 0;
const service_js_1 = require("./service.js");
const asyncHandler_js_1 = require("../../utils/asyncHandler.js");
const ApiResponse_js_1 = __importDefault(require("../../utils/ApiResponse.js"));
exports.signup = (0, asyncHandler_js_1.asyncHandler)(async (req, res, next) => {
    const { user, token } = await service_js_1.UserService.signup(req.body);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json(new ApiResponse_js_1.default(201, "User created successfully", { user, token }));
});
exports.login = (0, asyncHandler_js_1.asyncHandler)(async (req, res, next) => {
    const { user, token } = await service_js_1.UserService.login(req.body);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json(new ApiResponse_js_1.default(200, "Login successful", { user, token }));
});
exports.logout = (0, asyncHandler_js_1.asyncHandler)(async (req, res, next) => {
    res.clearCookie("token");
    res.status(200).json(new ApiResponse_js_1.default(200, "Logout successful"));
});
exports.getProfile = (0, asyncHandler_js_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user.id;
    const user = await service_js_1.UserService.getProfile(userId);
    res.status(200).json(new ApiResponse_js_1.default(200, "Profile retrieved successfully", user));
});
//# sourceMappingURL=controller.js.map