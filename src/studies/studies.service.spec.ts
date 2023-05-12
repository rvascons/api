import { Test, TestingModule } from '@nestjs/testing';
import { StudiesService } from './studies.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Study } from './entities/study.entity';

describe('StudiesService', () => {
  let service: StudiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudiesService,
        {
          provide: getRepositoryToken(Study),
          useValue: Study,
        },
      ],
    }).compile();

    service = module.get<StudiesService>(StudiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
