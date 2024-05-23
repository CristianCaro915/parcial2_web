/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity/propuesta.entity';


@Injectable()
export class ProfesorPropuestasService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private readonly profesorRepository: Repository<ProfesorEntity>,
     
        @InjectRepository(PropuestaEntity)
        private readonly propuestaRepository: Repository<PropuestaEntity>
    ) {}
}
