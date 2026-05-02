import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

import { User } from './model';

import { IUser, IUserResponse, ISignup, ILogin } from './interface';

import { config } from '../../config/env';

import ApiError from '../../utils/ApiError';

export class UserService {
  static async signup(data: ISignup): Promise<{ user: IUserResponse; token: string }> {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      throw new ApiError(400, 'User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, config.BCRYPT_ROUNDS);

    const user = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id, email: user.email }, config.JWT_SECRET, { expiresIn: '1h' });

    return { user: { _id: user._id, name: user.name, email: user.email }, token };
  }

  static async login(data: ILogin): Promise<{ user: IUserResponse; token: string }> {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const token = jwt.sign({ id: user._id, email: user.email }, config.JWT_SECRET, { expiresIn: '1h' });

    return { user: { _id: user._id, name: user.name, email: user.email }, token };
  }

  static async getProfile(userId: string): Promise<IUserResponse> {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    return user;
  }
}