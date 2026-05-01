import mongoose, { Schema, Document } from 'mongoose';

import { IUser } from './interface.js';

const userSchema = new Schema<IUser & Document>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

export const User = mongoose.model<IUser & Document>('User', userSchema);