import { Temperature } from './interfaces/temperature.interface';
import { Model } from 'mongoose';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<Temperature>);
    findAll(): Promise<Temperature[]>;
    findOne(id: string): Promise<Temperature>;
    create(item: Temperature): Promise<Temperature>;
    delete(id: string): Promise<Temperature>;
    update(id: string, item: Temperature): Promise<Temperature>;
}
