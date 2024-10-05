// src/scheduling/schemas/scheduling.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SchedulingDocument = Scheduling & Document;

@Schema({ timestamps: true })
export class Scheduling {
  @Prop({ type: String, required: true })
  usuarioId: string;

  @Prop({ type: String, required: true })
  meditacaoId: string;

  @Prop({ required: true })
  dataHora: Date;

  @Prop({ default: 'pendente' })
  status: string;
}

export const SchedulingSchema = SchemaFactory.createForClass(Scheduling);
