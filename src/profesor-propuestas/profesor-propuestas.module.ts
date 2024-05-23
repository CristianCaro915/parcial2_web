import { Module } from '@nestjs/common';
import { ProfesorPropuestasService } from './profesor-propuestas.service';

@Module({
  providers: [ProfesorPropuestasService]
})
export class ProfesorPropuestasModule {}
