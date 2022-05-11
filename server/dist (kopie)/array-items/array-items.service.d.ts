import { CreateArrayItemDto } from './dto/create-array-item.dto';
import { UpdateArrayItemDto } from './dto/update-array-item.dto';
export declare class ArrayItemsService {
    create(createArrayItemDto: CreateArrayItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateArrayItemDto: UpdateArrayItemDto): string;
    remove(id: number): string;
}
