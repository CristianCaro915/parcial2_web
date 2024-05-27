import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteProyectoService } from './estudiante-proyecto.service';

describe('EstudianteProyectoService', () => {
  let service: EstudianteProyectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudianteProyectoService],
    }).compile();

    service = module.get<EstudianteProyectoService>(EstudianteProyectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
