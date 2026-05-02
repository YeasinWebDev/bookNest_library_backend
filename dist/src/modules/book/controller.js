import { BookService } from './service';
import { asyncHandler } from '../../utils/asyncHandler';
import ApiResponse from '../../utils/ApiResponse';
export const createBook = asyncHandler(async (req, res, next) => {
    const book = await BookService.createBook(req.body);
    res.status(201).json(new ApiResponse(201, 'Book created successfully', book));
});
export const getAllBooks = asyncHandler(async (req, res, next) => {
    const parseNumber = (value) => {
        if (typeof value !== 'string' || value.trim() === '') {
            return undefined;
        }
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : undefined;
    };
    const books = await BookService.getAllBooks({
        category: typeof req.query.category === 'string' ? req.query.category : undefined,
        search: typeof req.query.search === 'string' ? req.query.search : undefined,
        maxPrice: parseNumber(req.query.maxPrice),
        minRating: parseNumber(req.query.minRating),
        page: parseNumber(req.query.page) ?? 1,
        limit: parseNumber(req.query.limit) ?? 10,
    });
    res.status(200).json(new ApiResponse(200, 'Books retrieved successfully', books));
});
export const getBookById = asyncHandler(async (req, res, next) => {
    const book = await BookService.getBookById(req.params.id);
    res.status(200).json(new ApiResponse(200, 'Book retrieved successfully', book));
});
export const updateBook = asyncHandler(async (req, res, next) => {
    const book = await BookService.updateBook(req.params.id, req.body);
    res.status(200).json(new ApiResponse(200, 'Book updated successfully', book));
});
export const deleteBook = asyncHandler(async (req, res, next) => {
    await BookService.deleteBook(req.params.id, req.user);
    res.status(200).json(new ApiResponse(200, 'Book deleted successfully'));
});
//# sourceMappingURL=controller.js.map