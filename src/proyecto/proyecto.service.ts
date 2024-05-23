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
        return await this.proyectoRepository.find({ relations: ["socios"] });
    }

    async findOne(id: string): Promise<ProyectoEntity> {
        const propuesta: ProyectoEntity = await this.proyectoRepository.findOne({where: {id}, relations: ["socios"] } );
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


}