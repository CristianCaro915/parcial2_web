/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { EstudianteDto } from './estudiante.dto/estudiante.dto';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { EstudianteService } from './estudiante.service';

@Controller('estudiante')
@UseInterceptors(BusinessErrorsInterceptor)
export class EstudianteController {
    constructor(private readonly estudianteService: EstudianteService){}

    @Get(':estudianteId')
    async findMembersFromClub(@Param('estudianteId') id: string){
        return await this.estudianteService.findOne(id);
    }
}
