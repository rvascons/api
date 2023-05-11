import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly ProjectRepository: Repository<Project>,
  ) { }

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.ProjectRepository.save(createProjectDto);
  }

  findAll() {
    return this.ProjectRepository.find();
  }

  findOne(id: number) {
    return this.ProjectRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.ProjectRepository.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.ProjectRepository.delete(id);
  }
}
