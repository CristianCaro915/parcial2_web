/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { ProfesorDto } from 'src/profesor/profesor.dto/profesor.dto';
import { ProyectoProfesorService } from './proyecto-profesor.service';

@Controller('proyecto')
export class ProyectoProfesorController {
    constructor(private readonly proyectoProfesorService: ProyectoProfesorService){}

    @Post(':proyectoId/profesor/:proyectoId')
    async addProfesorPropuestaa(@Param('proyectoId') clubId: string, @Param('proyectoId') socioId: string){
        return await this.proyectoProfesorService.addProfesorPropuesta(clubId, socioId);
    }

    @Get(':proyectoId/profesor')
    async findProfesorPropuestas(@Param('proyectoId') clubId: string){
        return await this.proyectoProfesorService.findProfesorPropuestas(clubId);
    }

    @Get(':proyectoId/profesor/:proyectoId')
    async findProfesorPropuesta(@Param('proyectoId') clubId: string, @Param('proyectoId') socioId: string){
        return await this.proyectoProfesorService.findProfesorPropuesta(clubId, socioId);
    }

    @Put(':proyectoId/profesor')
    async updateProfesorPropuesta(@Body() sociosDto: ProfesorDto[], @Param('profesorId') clubId: string){
        const socios = plainToInstance(ProfesorEntity, sociosDto)
        return await this.proyectoProfesorService.updateProfesorPropuesta(clubId, socios);
    }
    
    @Delete(':proyectoId/profesor/:proyectoId')
    @HttpCode(204)
    async deleteProfesorPropuesta(@Param('proyectoId') clubId: string, @Param('proyectoId') socioId: string){
        return await this.proyectoProfesorService.deleteProfesorPropuesta(clubId, socioId);
    }
}

