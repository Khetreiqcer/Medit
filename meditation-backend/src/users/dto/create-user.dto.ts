// src/users/dto/create-user.dto.ts

import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  nome: string;

  @IsEmail({}, { message: 'O email informado é inválido' })
  email: string;

  @IsString()
  senha: string;

  @IsString()
  papel?: string;
}
