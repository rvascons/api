import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Study } from './entities/study.entity';
import { Repository } from 'typeorm';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class StudiesService {
  constructor(
    @InjectRepository(Study)
    private studiesRepository: Repository<Study>,

    private projectsService: ProjectsService,
  ) { }

  async create(createStudyDto: CreateStudyDto) {
    let project = null;
    if (createStudyDto.projectId) {
      project = await this.projectsService.findOne(createStudyDto.projectId);

      if (!project) {
        throw new NotFoundException(
          `Project with id ${createStudyDto.projectId} not found`,
        );
      }
    }

    const study = this.studiesRepository.create(createStudyDto);
    study.project = project;
    return this.studiesRepository.save(study);
  }

  findAll() {
    return this.studiesRepository.find({ relations: ['project'] });
  }

  findOne(id: number) {
    return this.studiesRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateStudyDto: UpdateStudyDto) {
    return this.studiesRepository.update(id, updateStudyDto);
  }

  remove(id: number) {
    return this.studiesRepository.delete(id);
  }
}
