"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const model_1 = require("./model");
const env_1 = require("../../config/env");
const ApiError_1 = __importDefault(require("../../utils/ApiError"));
class UserService {
    static async signup(data) {
        const existingUser = await model_1.User.findOne({ email: data.email });
        if (existingUser) {
            throw new ApiError_1.default(400, 'User already exists');
        }
        const hashedPassword = await bcrypt_1.default.hash(data.password, env_1.config.BCRYPT_ROUNDS);
        const user = new model_1.User({
            name: data.name,
            email: data.email,
            password: hashedPassword,
        });
        await user.save();
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, env_1.config.JWT_SECRET, { expiresIn: '1h' });
        return { user: { _id: user._id, name: user.name, email: user.email }, token };
    }
    static async login(data) {
        const user = await model_1.User.findOne({ email: data.email });
        if (!user) {
            throw new ApiError_1.default(401, 'Invalid credentials');
        }
        const isMatch = await bcrypt_1.default.compare(data.password, user.password);
        if (!isMatch) {
            throw new ApiError_1.default(401, 'Invalid credentials');
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, env_1.config.JWT_SECRET, { expiresIn: '1h' });
        return { user: { _id: user._id, name: user.name, email: user.email }, token };
    }
    static async getProfile(userId) {
        const user = await model_1.User.findById(userId).select('-password');
        if (!user) {
            throw new ApiError_1.default(404, 'User not found');
        }
        return user;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=service.js.map