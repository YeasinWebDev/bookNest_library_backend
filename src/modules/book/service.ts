import { Book } from './model';

import {
  IBook,
  IBookResponse,
  ICreateBook,
  IUpdateBook,
  IBookQuery,
  IBookPaginationResponse,
} from './interface';

import ApiError from '../../utils/ApiError';
import { IUser } from '../user/interface';

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
  static async createBook(data: ICreateBook): Promise<IBookResponse> {
    const book = new Book(data);
    await book.save();
    return book;
  }

  static async getAllBooks(filters: IBookQuery = {}): Promise<IBookPaginationResponse> {
    const {
      category,
      search,
      maxPrice,
      minRating,
      page = 1,
      limit = 10,
    } = filters;

    const query: Record<string, any> = {};

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

  static async getBookById(id: string): Promise<IBookResponse> {
    const book = await Book.findById(id);
    if (!book) {
      throw new ApiError(404, 'Book not found');
    }
    return book;
  }

  static async updateBook(id: string, data: IUpdateBook): Promise<IBookResponse> {
    const book = await Book.findByIdAndUpdate(id, data, { new: true });
    if (!book) {
      throw new ApiError(404, 'Book not found');
    }
    return book;
  }

  static async deleteBook(id: string, user:IUser): Promise<void> {
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