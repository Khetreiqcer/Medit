import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Meditation, MeditationDocument } from '../models/meditation.shema';
import { Model } from 'mongoose';
import { CreateMeditationDto } from './dto/create-meditation.dto';

@Injectable()
export class MeditationsService {
  constructor(
    @InjectModel(Meditation.name)
    private meditationModel: Model<MeditationDocument>,
  ) {}

  async findAll(): Promise<Meditation[]> {
    return this.meditationModel.find().exec();
  }

  async create(createMeditationDto: CreateMeditationDto): Promise<Meditation> {
    const newMeditation = new this.meditationModel(createMeditationDto);
    return newMeditation.save();
  }
}
