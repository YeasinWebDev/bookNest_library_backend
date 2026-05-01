import ApiError from '../utils/ApiError.js';
export const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.errors.map(err => err.message).join(', ');
            throw new ApiError(400, errors);
        }
        next();
    };
};
//# sourceMappingURL=validate.js.map