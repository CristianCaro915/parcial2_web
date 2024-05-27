import { Module } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { PropuestaController } from './propuesta.controller';
import { PropuestaEntity } from './propuesta.entity/propuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PropuestaService],
  controllers: [PropuestaController],
  imports: [TypeOrmModule.forFeature([PropuestaEntity])]
})
export class PropuestaModule {}
