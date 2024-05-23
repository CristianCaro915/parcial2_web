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
        return await this.profesorRepository.find({ relations: ["propuestas"] });
    }

    async findOne(id: string): Promise<ProfesorEntity> {
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where: {id}, relations: ["propuestas"] } );
        if (!profesor)
          throw new BusinessLogicException("The profesor with the given id was not found", BusinessError.NOT_FOUND);
    
        return profesor;
    }
    
    async create(profesor: ProfesorEntity): Promise<ProfesorEntity> {
        if (profesor.grupoInvestigacion !== "TICSW" && profesor.grupoInvestigacion ) {
            if(profesor.grupoInvestigacion !== "IMAGINE"){
                if(profesor.grupoInvestigacion !== "COMIT"){
                    throw new BusinessLogicException("The investigation group should be (TICSW,IMAGINE,COMIT) ", BusinessError.PRECONDITION_FAILED);
                }
            }
        }
        return await this.profesorRepository.save(profesor);
    }

    async deleteId(id: string) {
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{id}});
        if (!profesor)
            throw new BusinessLogicException("The profesor with the given id was not found", BusinessError.NOT_FOUND);  
        if(profesor.propuestas){
            for (let prop of profesor.propuestas){
                if(prop.proyecto){
                    throw new BusinessLogicException("Profesor cannot be deleted because has a proposal that has a proyect", BusinessError.PRECONDITION_FAILED)
                }
            }
        }
        
        await this.profesorRepository.remove(profesor);
    }

    async deleteCedula(cedula: number) {
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{cedula}});
        if (!profesor)
          throw new BusinessLogicException("The profesor with the given cc was not found", BusinessError.NOT_FOUND);
        if(profesor.propuestas){
            for (let prop of profesor.propuestas){
                if(prop.proyecto){
                    throw new BusinessLogicException("Profesor cannot be deleted because has a proposal that has a proyect", BusinessError.PRECONDITION_FAILED)
                }
            }
        }
        await this.profesorRepository.remove(profesor);
    }

}
