import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  rating: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
