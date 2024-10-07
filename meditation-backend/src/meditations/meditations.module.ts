import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeditationsService } from './meditations.service';
import { MeditationsController } from './meditations.controller';
import { Meditation, MeditationSchema } from '../models/meditation.shema';
import { Get, Post, Body, UseGuards } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Meditation.name, schema: MeditationSchema },
    ]),
  ],
  controllers: [MeditationsController],
  providers: [MeditationsService],
})
export class MeditationsModule {}
