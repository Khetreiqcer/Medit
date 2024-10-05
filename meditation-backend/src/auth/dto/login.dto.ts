// src/auth/dto/login.dto.ts

import { IsString, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'O email informado é inválido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  senha: string;
}
