// src/scheduling/scheduling.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Scheduling, SchedulingDocument } from './schemas/scheduling.schema';
import { Model } from 'mongoose';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';

@Injectable()
export class SchedulingService {
  constructor(
    @InjectModel(Scheduling.name)
    private schedulingModel: Model<SchedulingDocument>,
  ) {}

  async create(
    createSchedulingDto: CreateSchedulingDto,
    user,
  ): Promise<Scheduling> {
    const newScheduling = new this.schedulingModel({
      ...createSchedulingDto,
      usuarioId: user._id,
    });
    return newScheduling.save();
  }

  async findAll(user): Promise<Scheduling[]> {
    return this.schedulingModel.find({ usuarioId: user._id }).exec();
  }

  async remove(id: string, user): Promise<void> {
    const result = await this.schedulingModel
      .deleteOne({ _id: id, usuarioId: user._id })
      .exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(
        'Agendamento não encontrado ou acesso negado',
      );
    }
  }
}
