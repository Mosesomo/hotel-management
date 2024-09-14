// perfoming CRUD operations

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  // create hotel
  @Post()
  async create(@Body() hotelData: any) {
    return this.hotelsService.create(hotelData);
  }

  // Retrieve hotels created
  @Get()
  async findAll() {
    return this.hotelsService.findAll();
  }

  // Retrieve a single hotel created by id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(id);
  }

  // update an hotel
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return this.hotelsService.update(id, updateData);
  }

  // Delete hotel
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.hotelsService.delete(id);
  }
}
