// src/scheduling/dto/create-scheduling.dto.ts

import { IsString, IsDateString } from 'class-validator';

export class CreateSchedulingDto {
  @IsString()
  meditacaoId: string;

  @IsDateString()
  dataHora: string; // Data e hora em formato ISO
}
