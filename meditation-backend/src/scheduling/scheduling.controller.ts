// src/scheduling/scheduling.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createSchedulingDto: CreateSchedulingDto,
    @Request() req,
  ) {
    return this.schedulingService.create(createSchedulingDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req) {
    return this.schedulingService.findAll(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    return this.schedulingService.remove(id, req.user);
  }
}
