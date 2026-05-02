import mongoose, { Schema, Document } from 'mongoose';

import { IBook } from './interface';

const bookSchema = new Schema<IBook & Document>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  img: { type: String, required: true },
}, {
  timestamps: true,
});

export const Book = mongoose.model<IBook & Document>('Book', bookSchema);