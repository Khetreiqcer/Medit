import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { MeditationsModule } from './meditations/meditations.module';
// Importe aqui seus módulos e esquemas

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    BlogModule,
    SchedulingModule,
    MeditationsModule,
    // Outros módulos
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
