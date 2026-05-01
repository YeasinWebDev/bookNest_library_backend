import { IUserResponse, ISignup, ILogin } from './interface.js';
export declare class UserService {
    static signup(data: ISignup): Promise<{
        user: IUserResponse;
        token: string;
    }>;
    static login(data: ILogin): Promise<{
        user: IUserResponse;
        token: string;
    }>;
    static getProfile(userId: string): Promise<IUserResponse>;
}
