/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { ProfesorService } from './profesor.service';


@Controller('profesor')
@UseInterceptors(BusinessErrorsInterceptor)
export class EstudianteController {
    constructor(private readonly profesorService: ProfesorService){}

    @Get("profesor:id")
    async findById(@Param('estudianteId') id: string){
        return await this.profesorService.findOne(id);
    }
}