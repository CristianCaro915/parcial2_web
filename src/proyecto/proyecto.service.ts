import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';

import { ProyectoEntity } from './proyecto.entity/proyecto.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>
    ){}

    async findAll(): Promise<ProyectoEntity[]> {
        return await this.proyectoRepository.find({ relations: ["estudiante"] });
    }

    async findOne(id: string): Promise<ProyectoEntity> {
        const propuesta: ProyectoEntity = await this.proyectoRepository.findOne({where: {id} } );
        if (!propuesta)
          throw new BusinessLogicException("The proposal with the given id was not found", BusinessError.NOT_FOUND);
    
        return propuesta;
    }
    
    async create(proyecto: ProyectoEntity): Promise<ProyectoEntity> {
        const fechaFin = new Date(proyecto.fechaFin);
        const fechaInicio = new Date(proyecto.fechaInicio);
        
        if (fechaInicio>fechaFin) {
            throw new BusinessLogicException("StartDate is higher than EndDate", BusinessError.PRECONDITION_FAILED);
        }
        return await this.proyectoRepository.save(proyecto);
    }
    async update(id: string, estudiante: ProyectoEntity): Promise<ProyectoEntity> {
        const persistedClub: ProyectoEntity = await this.proyectoRepository.findOne({where:{id}});
        if (!persistedClub)
          throw new BusinessLogicException("The proposal with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.proyectoRepository.save({...persistedClub, ...estudiante});
    }

    async delete(id: string) {
        const propuesta: ProyectoEntity = await this.proyectoRepository.findOne({where:{id}});
        if (!propuesta)
            throw new BusinessLogicException("The proposal given id was not found", BusinessError.NOT_FOUND);
        if (!propuesta)
          throw new BusinessLogicException("The cannot delete a proposal that has a proyect", BusinessError.PRECONDITION_FAILED);
      
        await this.proyectoRepository.remove(propuesta);
    }

}