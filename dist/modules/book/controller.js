"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getAllBooks = exports.createBook = void 0;
const service_1 = require("./service");
const asyncHandler_1 = require("../../utils/asyncHandler");
const ApiResponse_1 = __importDefault(require("../../utils/ApiResponse"));
exports.createBook = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const book = await service_1.BookService.createBook(req.body);
    res.status(201).json(new ApiResponse_1.default(201, 'Book created successfully', book));
});
exports.getAllBooks = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const parseNumber = (value) => {
        if (typeof value !== 'string' || value.trim() === '') {
            return undefined;
        }
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : undefined;
    };
    const books = await service_1.BookService.getAllBooks({
        category: typeof req.query.category === 'string' ? req.query.category : undefined,
        search: typeof req.query.search === 'string' ? req.query.search : undefined,
        maxPrice: parseNumber(req.query.maxPrice),
        minRating: parseNumber(req.query.minRating),
        page: parseNumber(req.query.page) ?? 1,
        limit: parseNumber(req.query.limit) ?? 10,
    });
    res.status(200).json(new ApiResponse_1.default(200, 'Books retrieved successfully', books));
});
exports.getBookById = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const book = await service_1.BookService.getBookById(req.params.id);
    res.status(200).json(new ApiResponse_1.default(200, 'Book retrieved successfully', book));
});
exports.updateBook = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const book = await service_1.BookService.updateBook(req.params.id, req.body);
    res.status(200).json(new ApiResponse_1.default(200, 'Book updated successfully', book));
});
exports.deleteBook = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    await service_1.BookService.deleteBook(req.params.id, req.user);
    res.status(200).json(new ApiResponse_1.default(200, 'Book deleted successfully'));
});
//# sourceMappingURL=controller.js.map