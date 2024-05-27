import { Module } from '@nestjs/common';
import { ProfesorPropuestasService } from './profesor-propuestas.service';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity/propuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorPropuestasController } from './profesor-propuestas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorEntity, PropuestaEntity])],
  providers: [ProfesorPropuestasService],
  controllers: [ProfesorPropuestasController]
})
export class ProfesorPropuestasModule {}
