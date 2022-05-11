import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findId(id: string): Promise<User>;
    findOne(email: string): Promise<User>;
    create(user: CreateUserDto): Promise<CreateUserDto>;
    delete(id: string): Promise<User>;
    update(id: string, user: User): Promise<User>;
}
