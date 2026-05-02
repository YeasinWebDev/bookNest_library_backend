import { z } from 'zod';
export declare const createBookValidation: z.ZodObject<{
    title: z.ZodString;
    category: z.ZodString;
    desc: z.ZodString;
    price: z.ZodNumber;
    rating: z.ZodNumber;
    img: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    category: string;
    desc: string;
    price: number;
    rating: number;
    img: string;
}, {
    title: string;
    category: string;
    desc: string;
    price: number;
    rating: number;
    img: string;
}>;
export declare const updateBookValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    rating: z.ZodOptional<z.ZodNumber>;
    img: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    category?: string | undefined;
    desc?: string | undefined;
    price?: number | undefined;
    rating?: number | undefined;
    img?: string | undefined;
}, {
    title?: string | undefined;
    category?: string | undefined;
    desc?: string | undefined;
    price?: number | undefined;
    rating?: number | undefined;
    img?: string | undefined;
}>;
