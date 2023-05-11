import { Module } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { StudiesController } from './studies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Study } from './entities/study.entity';
import { ProjectsModule } from '../projects/projects.module';

@Module({
  imports: [ProjectsModule, TypeOrmModule.forFeature([Study])],
  controllers: [StudiesController],
  providers: [StudiesService],
})
export class StudiesModule { }
