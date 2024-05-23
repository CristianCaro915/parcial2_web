import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';

import { PropuestaEntity } from './propuesta.entity/propuesta.entity';

@Injectable()
export class PropuestaService {
    constructor(
        @InjectRepository(PropuestaEntity)
        private readonly propuestaRepository: Repository<PropuestaEntity>
    ){}

    async findAll(): Promise<PropuestaEntity[]> {
        return await this.propuestaRepository.find({ relations: ["socios"] });
    }

    async findOne(id: string): Promise<PropuestaEntity> {
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where: {id}, relations: ["socios"] } );
        if (!propuesta)
          throw new BusinessLogicException("The proposal with the given id was not found", BusinessError.NOT_FOUND);
    
        return propuesta;
    }
    
    async create(propuesta: PropuestaEntity): Promise<PropuestaEntity> {
        if (!propuesta.titulo) {
            throw new BusinessLogicException("The title cannot be empty", BusinessError.PRECONDITION_FAILED);
        }
        return await this.propuestaRepository.save(propuesta);
    }

    async delete(id: string) {
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where:{id}});
        if (!propuesta)
            throw new BusinessLogicException("The proposal given id was not found", BusinessError.NOT_FOUND);
        if (!propuesta.proyecto)
          throw new BusinessLogicException("The cannot delete a proposal that has a proyect", BusinessError.PRECONDITION_FAILED);
      
        await this.propuestaRepository.remove(propuesta);
    }

}