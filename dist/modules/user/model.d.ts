import mongoose from 'mongoose';
import { IUser } from './interface.js';
export declare const User: mongoose.Model<IUser & mongoose.Document<any, any, any>, {}, {}, {}, mongoose.Document<unknown, {}, IUser & mongoose.Document<any, any, any>> & IUser & mongoose.Document<any, any, any> & {
    _id: mongoose.Types.ObjectId;
}, any>;
