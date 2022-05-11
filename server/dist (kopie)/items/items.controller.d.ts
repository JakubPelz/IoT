import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { ItemsService } from './items.service';
import { Temperature } from './interfaces/temperature.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Temperature[]>;
    findOne(id: any): Promise<Temperature>;
    create(createItemDto: CreateTemperatureDto): Promise<Temperature>;
    createArray(): [];
    delete(id: any): Promise<Temperature>;
    update(updateItemDto: CreateTemperatureDto, id: any): Promise<Temperature>;
}
