import { Test, TestingModule } from '@nestjs/testing';
import { StudiesController } from './studies.controller';
import { StudiesService } from './studies.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Study } from './entities/study.entity';

describe('StudiesController', () => {
  let controller: StudiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudiesController],
      providers: [
        StudiesService,
        {
          provide: getRepositoryToken(Study),
          useValue: Study,
        },
      ],
    }).compile();

    controller = module.get<StudiesController>(StudiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
