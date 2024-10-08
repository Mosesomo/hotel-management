import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { HotelSchema } from './hotel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }])
  ],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
