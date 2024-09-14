// defining CRUD operations

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel, HotelDocument } from './hotel.schema';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>) {}

  async create(hotelData: any): Promise<Hotel> {
    const hotel = new this.hotelModel(hotelData);
    return hotel.save();
  }

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }

  async findOne(id: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findById(id).exec();
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    return hotel;
  }

  async update(id: string, updateData: any): Promise<Hotel> {
    return this.hotelModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    const result = await this.hotelModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Hotel not found');
    }
  }
}
