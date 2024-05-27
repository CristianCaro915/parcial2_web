import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly studentRepository: Repository<EstudianteEntity>
    ){}

    async findAll(): Promise<EstudianteEntity[]> {
        return await this.studentRepository.find();
    }

    async findOne(id: string): Promise<EstudianteEntity> {
        const estudiante: EstudianteEntity = await this.studentRepository.findOne({where: {id} });
        if (!estudiante)
          throw new BusinessLogicException("The student with the given id was not found", BusinessError.NOT_FOUND);
    
        return estudiante;
    }
    
    async create(estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        if (estudiante.codigo.length !== 10 && estudiante.codigo) {
            throw new BusinessLogicException("The student code must contain 10 characters", BusinessError.PRECONDITION_FAILED);
        }
        return await this.studentRepository.save(estudiante);
    }
    async update(id: string, estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        const persistedClub: EstudianteEntity = await this.studentRepository.findOne({where:{id}});
        if (estudiante.codigo.length !== 10 && !persistedClub)
          throw new BusinessLogicException("The student with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.studentRepository.save({...persistedClub, ...estudiante});
    }

    async delete(id: string) {
        const club: EstudianteEntity = await this.studentRepository.findOne({where:{id}});
        if (!club)
          throw new BusinessLogicException("The student with the given id was not found", BusinessError.NOT_FOUND);
      
        await this.studentRepository.remove(club);
    }
}
