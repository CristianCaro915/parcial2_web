import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';

import { ProfesorEntity } from './profesor.entity/profesor.entity';

@Injectable()
export class ProfesorService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private readonly profesorRepository: Repository<ProfesorEntity>
    ){}

    async findAll(): Promise<ProfesorEntity[]> {
        return await this.profesorRepository.find({ relations: ["socios"] });
    }

    async findOne(id: string): Promise<ProfesorEntity> {
        const club: ProfesorEntity = await this.profesorRepository.findOne({where: {id}, relations: ["socios"] } );
        if (!club)
          throw new BusinessLogicException("The profesor with the given id was not found", BusinessError.NOT_FOUND);
    
        return club;
    }
    
    async create(profesor: ProfesorEntity): Promise<ProfesorEntity> {
        if ( profesor.grupoInvestigacion !== "TICSW" && profesor.grupoInvestigacion ) {
            if(profesor.grupoInvestigacion !== "IMAGINE"){
                if(profesor.grupoInvestigacion !== "COMIT"){
                    throw new BusinessLogicException("The investigation group should be (TICSW,IMAGINE,COMIT) ", BusinessError.PRECONDITION_FAILED);
                }
            }
        }
        return await this.profesorRepository.save(profesor);
    }

    async deleteId(id: string) {
        const club: ProfesorEntity = await this.profesorRepository.findOne({where:{id}});
        if (!club)
          throw new BusinessLogicException("The profesor with the given id was not found", BusinessError.NOT_FOUND);
      
        await this.profesorRepository.remove(club);
    }

    async deleteCedula(cedula: number) {
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{cedula}});
        if (!profesor)
          throw new BusinessLogicException("The profesor with the given cc was not found", BusinessError.NOT_FOUND);
      
        await this.profesorRepository.remove(profesor);
    }

}
