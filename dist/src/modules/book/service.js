import { Book } from './model';
import ApiError from '../../utils/ApiError';
export const categories = [
    'All Genres',
    'Fiction',
    'Non-Fiction',
    'Philosophy',
    'Science',
    'Design',
    'History',
    'Poetry',
    'Gastronomy',
];
export class BookService {
    static async createBook(data) {
        const book = new Book(data);
        await book.save();
        return book;
    }
    static async getAllBooks(filters = {}) {
        const { category, search, maxPrice, minRating, page = 1, limit = 10, } = filters;
        const query = {};
        if (category && category !== 'All Genres') {
            query.category = category;
        }
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { desc: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
            ];
        }
        if (typeof minRating === 'number' && !Number.isNaN(minRating)) {
            query.rating = { ...query.rating, $gte: minRating };
        }
        if (typeof maxPrice === 'number' && !Number.isNaN(maxPrice)) {
            query.price = { ...query.price, $lte: maxPrice };
        }
        const currentPage = Math.max(1, page);
        const currentLimit = Math.max(1, limit);
        const skip = (currentPage - 1) * currentLimit;
        const total = await Book.countDocuments(query);
        const books = await Book.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(currentLimit);
        const totalPages = Math.ceil(total / currentLimit) || 1;
        return {
            books,
            total,
            page: currentPage,
            limit: currentLimit,
            totalPages,
        };
    }
    static async getBookById(id) {
        const book = await Book.findById(id);
        if (!book) {
            throw new ApiError(404, 'Book not found');
        }
        return book;
    }
    static async updateBook(id, data) {
        const book = await Book.findByIdAndUpdate(id, data, { new: true });
        if (!book) {
            throw new ApiError(404, 'Book not found');
        }
        return book;
    }
    static async deleteBook(id, user) {
        const isMyBook = await Book.findOne({ _id: id, user: user._id });
        if (!isMyBook) {
            throw new ApiError(403, 'You are not allowed to delete this book');
        }
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            throw new ApiError(404, 'Book not found');
        }
    }
}
//# sourceMappingURL=service.js.map