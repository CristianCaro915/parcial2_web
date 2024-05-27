import { Module } from '@nestjs/common';
import { EstudianteProyectoService } from './estudiante-proyecto.service';
import { EstudianteProyectoController } from './estudiante-proyecto.controller';

@Module({
  providers: [EstudianteProyectoService],
  controllers: [EstudianteProyectoController]
})
export class EstudianteProyectoModule {}
