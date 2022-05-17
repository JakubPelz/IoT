import { TokenInfo } from './token';

export interface CreateUserDto {
    firstName: string;
    lastname: string;
    email: string;
    username: string;
    passwordRaw: string;
}

export interface UpdateUserDto {
    firstName: string;
    lastname: string;
    email: string;
}

export interface UserInfo extends TokenInfo {
    id: string;
    username: string;
    firstName: string;
    lastname: string;
    email: string;
}