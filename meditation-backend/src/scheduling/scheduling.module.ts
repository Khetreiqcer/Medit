import { Module } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { SchedulingController } from './scheduling.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scheduling, SchedulingSchema } from './schemas/scheduling.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Scheduling.name, schema: SchedulingSchema },
    ]),
  ],
  controllers: [SchedulingController],
  providers: [SchedulingService],
})
export class SchedulingModule {}
