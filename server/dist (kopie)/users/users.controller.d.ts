import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private readonly usersServices;
    constructor(usersServices: UsersService);
    findAll(): Promise<User[]>;
    findId(id: any): Promise<User>;
    findOne(id: any): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    delete(id: any): Promise<User>;
    update(updateUserDto: CreateUserDto, id: any): Promise<User>;
}
