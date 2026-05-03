"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookValidation = exports.createBookValidation = void 0;
const zod_1 = require("zod");
exports.createBookValidation = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    category: zod_1.z.string().min(1, 'Category is required'),
    desc: zod_1.z.string().min(1, 'Description is required'),
    price: zod_1.z.number().positive('Price must be positive'),
    rating: zod_1.z.number().min(0).max(5, 'Rating must be between 0 and 5'),
    img: zod_1.z.string().url('Image must be a valid URL'),
});
exports.updateBookValidation = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required').optional(),
    category: zod_1.z.string().min(1, 'Category is required').optional(),
    desc: zod_1.z.string().min(1, 'Description is required').optional(),
    price: zod_1.z.number().positive('Price must be positive').optional(),
    rating: zod_1.z.number().min(0).max(5, 'Rating must be between 0 and 5').optional(),
    img: zod_1.z.string().url('Image must be a valid URL').optional(),
});
//# sourceMappingURL=validation.js.map