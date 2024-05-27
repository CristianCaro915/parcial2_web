import { Module } from '@nestjs/common';
import { ProyectoProfesorService } from './proyecto-profesor.service';
import { ProyectoProfesorController } from './proyecto-profesor.controller';

@Module({
  providers: [ProyectoProfesorService],
  controllers: [ProyectoProfesorController]
})
export class ProyectoProfesorModule {}
