import { ArrayItemsService } from './array-items.service';
import { CreateArrayItemDto } from './dto/create-array-item.dto';
import { UpdateArrayItemDto } from './dto/update-array-item.dto';
export declare class ArrayItemsController {
    private readonly arrayItemsService;
    constructor(arrayItemsService: ArrayItemsService);
    create(createArrayItemDto: CreateArrayItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateArrayItemDto: UpdateArrayItemDto): string;
    remove(id: string): string;
}
