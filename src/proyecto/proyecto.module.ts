import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';

@Module({
  providers: [ProyectoService],
  controllers: [ProyectoController],
  imports: [TypeOrmModule.forFeature([ProyectoEntity])]
})
export class ProyectoModule {}
