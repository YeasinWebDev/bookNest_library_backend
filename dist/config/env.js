"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/booknest',
    JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
    BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS || '12'),
    NODE_ENV: process.env.NODE_ENV || 'development',
};
//# sourceMappingURL=env.js.map