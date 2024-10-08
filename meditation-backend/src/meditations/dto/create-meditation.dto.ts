// src/meditations/dto/create-meditation.dto.ts

import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMeditationDto {
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  arquivoAudio: string;

  @IsOptional()
  @IsNumber()
  duracao?: number;

  @IsOptional()
  @IsString()
  categoria?: string;
}
