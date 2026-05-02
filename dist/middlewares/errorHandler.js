import ApiResponse from '../utils/ApiResponse.js';
import { config } from '../config/env.js';
export const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    if (config.NODE_ENV === 'development') {
        console.error(err);
    }
    res.status(statusCode).json(new ApiResponse(statusCode, message, null));
};
//# sourceMappingURL=errorHandler.js.map