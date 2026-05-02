import { z } from 'zod';
export const createBookValidation = z.object({
    title: z.string().min(1, 'Title is required'),
    category: z.string().min(1, 'Category is required'),
    desc: z.string().min(1, 'Description is required'),
    price: z.number().positive('Price must be positive'),
    rating: z.number().min(0).max(5, 'Rating must be between 0 and 5'),
    img: z.string().url('Image must be a valid URL'),
});
export const updateBookValidation = z.object({
    title: z.string().min(1, 'Title is required').optional(),
    category: z.string().min(1, 'Category is required').optional(),
    desc: z.string().min(1, 'Description is required').optional(),
    price: z.number().positive('Price must be positive').optional(),
    rating: z.number().min(0).max(5, 'Rating must be between 0 and 5').optional(),
    img: z.string().url('Image must be a valid URL').optional(),
});
//# sourceMappingURL=validation.js.map