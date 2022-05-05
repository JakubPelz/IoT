import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TemperatureSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Item', schema: TemperatureSchema }]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}