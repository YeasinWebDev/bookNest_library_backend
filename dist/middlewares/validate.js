"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const ApiError_js_1 = __importDefault(require("../utils/ApiError.js"));
const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.errors.map(err => err.message).join(', ');
            throw new ApiError_js_1.default(400, errors);
        }
        next();
    };
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map