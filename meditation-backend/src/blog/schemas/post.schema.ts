// src/blog/schemas/post.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  conteudo: string;

  @Prop({ type: String })
  autorId: string; // ID do autor da postagem

  @Prop({ default: [] })
  tags: string[];

  @Prop({ default: 0 })
  visualizacoes: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
