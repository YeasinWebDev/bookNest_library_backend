import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/booknest',
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS || '12'),
  NODE_ENV: process.env.NODE_ENV || 'development',
};