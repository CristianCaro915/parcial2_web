import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//entities
import { ProyectoEntity } from './proyecto/proyecto.entity/proyecto.entity';
import { ProfesorEntity } from './profesor/profesor.entity/profesor.entity';
import { EstudianteEntity } from './estudiante/estudiante.entity/estudiante.entity';
import { PropuestaEntity } from './propuesta/propuesta.entity/propuesta.entity';
//modules
import { ProyectoModule } from './proyecto/proyecto.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { PropuestaModule } from './propuesta/propuesta.module';
import { ProfesorModule } from './profesor/profesor.module';
import { ProfesorPropuestasModule } from './profesor-propuestas/profesor-propuestas.module';


@Module({
  imports: [ProyectoModule, EstudianteModule,PropuestaModule,ProfesorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Cc11912270',
      database: 'parcial2_web',
      entities: [ProyectoEntity, ProfesorEntity,EstudianteEntity,PropuestaEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
    ProfesorPropuestasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
 })
 export class AppModule {}
