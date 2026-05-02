import { IBookResponse, ICreateBook, IUpdateBook, IBookQuery, IBookPaginationResponse } from './interface';
import { IUser } from '../user/interface';
export declare const categories: string[];
export declare class BookService {
    static createBook(data: ICreateBook): Promise<IBookResponse>;
    static getAllBooks(filters?: IBookQuery): Promise<IBookPaginationResponse>;
    static getBookById(id: string): Promise<IBookResponse>;
    static updateBook(id: string, data: IUpdateBook): Promise<IBookResponse>;
    static deleteBook(id: string, user: IUser): Promise<void>;
}
