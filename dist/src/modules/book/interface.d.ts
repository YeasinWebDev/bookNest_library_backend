export interface IBook {
    _id?: string;
    title: string;
    category: string;
    desc: string;
    price: number;
    rating: number;
    img: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IBookResponse {
    _id?: string;
    title: string;
    category: string;
    desc: string;
    price: number;
    rating: number;
    img: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ICreateBook {
    title: string;
    category: string;
    desc: string;
    price: number;
    rating: number;
    img: string;
}
export interface IUpdateBook {
    title?: string;
    category?: string;
    desc?: string;
    price?: number;
    rating?: number;
    img?: string;
}
export interface IBookQuery {
    category?: string;
    search?: string;
    maxPrice?: number;
    minRating?: number;
    page?: number;
    limit?: number;
}
export interface IBookPaginationResponse {
    books: IBookResponse[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
