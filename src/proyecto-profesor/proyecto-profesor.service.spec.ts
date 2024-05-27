import { Test, TestingModule } from '@nestjs/testing';
import { ProyectoProfesorService } from './proyecto-profesor.service';

describe('ProyectoProfesorService', () => {
  let service: ProyectoProfesorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectoProfesorService],
    }).compile();

    service = module.get<ProyectoProfesorService>(ProyectoProfesorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
