import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorPropuestasService } from './profesor-propuestas.service';

describe('ProfesorPropuestasService', () => {
  let service: ProfesorPropuestasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfesorPropuestasService],
    }).compile();

    service = module.get<ProfesorPropuestasService>(ProfesorPropuestasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
