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

    @Get()
    async findAll() {
      return await this.estudianteService.findAll();
    }
  
    @Get(':estudianteId')
    async findOne(@Param('estudianteId') estudianteId: string) {
      return await this.estudianteService.findOne(estudianteId);
    }
  
    @Post()
    async create(@Body() clubDto: EstudianteDto) {
      const club: EstudianteEntity = plainToInstance(EstudianteEntity, clubDto);
      return await this.estudianteService.create(club);
    }
  
    @Put(':clubId')
    async update(@Param('estudianteId') estudianteId: string, @Body() estudianteDto: EstudianteDto) {
      const club: EstudianteEntity = plainToInstance(EstudianteEntity, estudianteDto);
      return await this.estudianteService.update(estudianteId, club);
    }
  
    @Delete(':clubId')
    @HttpCode(204)
    async delete(@Param('clubId') clubId: string) {
      return await this.estudianteService.delete(clubId);
    }
}
