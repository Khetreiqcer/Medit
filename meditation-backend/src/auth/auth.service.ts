import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Método para registrar um novo usuário
  async signUp(registerDto: RegisterDto): Promise<{ message: string }> {
    const { email, senha } = registerDto;
    const userExists = await this.usersService.findByEmail(email);

    if (userExists) {
      throw new ConflictException('Email já está em uso');
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = await this.usersService.create({
      ...registerDto,
      senha: hashedPassword,
    });

    return { message: 'Usuário registrado com sucesso' };
  }

  // Método para validar o usuário e gerar o token JWT
  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(senha, user.senha))) {
      const { senha, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  // Método para fazer login e retornar o token JWT
  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const { email, senha } = loginDto;
    const user = await this.validateUser(email, senha);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
