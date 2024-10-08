import { Controller } from '@nestjs/common';
import { MeditationsService } from './meditations.service';
import { CreateMeditationDto } from './dto/create-meditation.dto';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';
import { Get, Post, Body, UseGuards } from '@nestjs/common';

@Controller('meditations')
export class MeditationsController {
  constructor(private readonly meditationsService: MeditationsService) {}

  @Get()
  async findAll() {
    return this.meditationsService.findAll();
  }

  @Post()
  async create(@Body() createMeditationDto: CreateMeditationDto) {
    return this.meditationsService.create(createMeditationDto);
  }
}
