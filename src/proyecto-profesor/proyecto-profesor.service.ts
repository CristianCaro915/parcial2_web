/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity/propuesta.entity';


@Injectable()
export class ProyectoProfesorService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private readonly profesorRepository: Repository<ProfesorEntity>,
     
        @InjectRepository(ProfesorEntity)
        private readonly propuestaRepository: Repository<ProfesorEntity>
    ) {}

    async addProfesorPropuesta(propuestaId: string, profesorId: string){
        /** 
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where: {id: profesorId}});
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where: {id: propuestaId}}) 
        propuesta.profesor = profesor;
        return await this.propuestaRepository.save(propuesta);
        */
      }

    async findProfesorPropuestas(propuestaId: string) {
        /** 
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where: {id: propuestaId}, relations: [""]});
        return propuesta.profesors;
        */
    }
     
    async findProfesorPropuesta(propuestaId: string, profesorId: string) {
        /** 
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where: {id: profesorId}});
        return propuestaprofesor;
        */
    }
     
    async updateProfesorPropuesta(propuestaId: string, profesors: ProfesorEntity[]){
        /** 
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where: {id: propuestaId}, relations: [""]});
        propuesta.profesors = profesors;
        return await this.propuestaRepository.save(propuesta);
        */
      }
     
    async deleteProfesorPropuesta(propuestaId: string, profesorId: string){
        /** 
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where: {id: profesorId}});
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where: {id: propuestaId}});
        const propuestaprofesor: PropuestaEntity = propuesta.profesor;
 
        propuesta.profesors = propuesta.profesors.filter(e => e.id !== profesorId);
        await this.propuestaRepository.save(propuesta);
        */
    }   
}
