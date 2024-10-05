// src/meditations/schemas/meditation.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeditationDocument = Meditation & Document;

@Schema({ timestamps: true })
export class Meditation {
  @Prop({ required: true })
  titulo: string;

  @Prop()
  descricao?: string;

  @Prop({ required: true })
  arquivoAudio: string;

  @Prop()
  duracao?: number;

  @Prop()
  categoria?: string;

  @Prop({ type: String })
  criadoPor: string; // ID do usuário que criou a meditação
}

export const MeditationSchema = SchemaFactory.createForClass(Meditation);
