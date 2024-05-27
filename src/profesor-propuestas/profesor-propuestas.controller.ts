/* eslint-disable prettier/prettier */
import { ProfesorPropuestasService } from './profesor-propuestas.service';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { ProfesorDto } from 'src/profesor/profesor.dto/profesor.dto';

@Controller('profesor')
export class ProfesorPropuestasController {
    constructor(private readonly profesorPropuestaService: ProfesorPropuestasService){}

    @Post(':profesorId/service/:serviceId')
    async addProfesorPropuestaa(@Param('profesorId') clubId: string, @Param('serviceId') socioId: string){
        return await this.profesorPropuestaService.addProfesorPropuesta(clubId, socioId);
    }

    @Get(':profesorId/service')
    async findProfesorPropuestas(@Param('profesorId') clubId: string){
        return await this.profesorPropuestaService.findProfesorPropuestas(clubId);
    }

    @Get(':profesorId/service/:serviceId')
    async findProfesorPropuesta(@Param('profesorId') clubId: string, @Param('serviceId') socioId: string){
        return await this.profesorPropuestaService.findProfesorPropuesta(clubId, socioId);
    }

    @Put(':profesorId/service')
    async updateProfesorPropuesta(@Body() sociosDto: ProfesorDto[], @Param('profesorId') clubId: string){
        const socios = plainToInstance(ProfesorEntity, sociosDto)
        return await this.profesorPropuestaService.updateProfesorPropuesta(clubId, socios);
    }
    
    @Delete(':profesorId/service/:serviceId')
    @HttpCode(204)
    async deleteProfesorPropuesta(@Param('profesorId') clubId: string, @Param('serviceId') socioId: string){
        return await this.profesorPropuestaService.deleteProfesorPropuesta(clubId, socioId);
    }
}

