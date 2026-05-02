import mongoose from 'mongoose';
import { IBook } from './interface';
export declare const Book: mongoose.Model<IBook & mongoose.Document<any, any, any>, {}, {}, {}, mongoose.Document<unknown, {}, IBook & mongoose.Document<any, any, any>> & IBook & mongoose.Document<any, any, any> & {
    _id: mongoose.Types.ObjectId;
}, any>;
