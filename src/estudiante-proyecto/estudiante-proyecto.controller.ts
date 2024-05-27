/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { ProfesorDto } from 'src/profesor/profesor.dto/profesor.dto';
import { EstudianteProyectoService } from './estudiante-proyecto.service';

@Controller('estudiante')
export class EstudianteProyectoController {
    constructor(private readonly estudianteProyectoService: EstudianteProyectoService){}

    @Post(':estudianteId/proyecto/:proyectoId')
    async addProfesorPropuestaa(@Param('estudianteId') clubId: string, @Param('proyectoId') socioId: string){
        return await this.estudianteProyectoService.addEstudiantePropuesta(clubId, socioId);
    }

    @Get(':estudianteId/proyecto')
    async findProfesorPropuestas(@Param('estudianteId') clubId: string){
        return await this.estudianteProyectoService.findEstudiantePropuestas(clubId);
    }

    @Get(':estudianteId/proyecto/:proyectoId')
    async findProfesorPropuesta(@Param('estudianteId') clubId: string, @Param('proyectoId') socioId: string){
        return await this.estudianteProyectoService.findEstudiantePropuesta(clubId, socioId);
    }

    @Put(':estudianteId/proyecto')
    async updateProfesorPropuesta(@Body() sociosDto: ProfesorDto[], @Param('profesorId') clubId: string){
        const socios = plainToInstance(ProfesorEntity, sociosDto)
        return await this.estudianteProyectoService.updateEstudiantePropuesta(clubId, socios);
    }
    
    @Delete(':estudianteId/proyecto/:proyectoId')
    @HttpCode(204)
    async deleteProfesorPropuesta(@Param('estudianteId') clubId: string, @Param('proyectoId') socioId: string){
        return await this.estudianteProyectoService.deleteEstudiantePropuesta(clubId, socioId);
    }
}
