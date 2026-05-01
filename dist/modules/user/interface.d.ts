export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IUserResponse {
    _id?: string;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface ISignup {
    name: string;
    email: string;
    password: string;
}
