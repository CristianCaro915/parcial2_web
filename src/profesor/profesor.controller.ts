/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { ProfesorService } from './profesor.service';
import { ProfesorDto } from './profesor.dto/profesor.dto';

@Controller('profesor')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProfesorController {
    constructor(private readonly profesorService: ProfesorService){}
    
    @Get()
    async findAll() {
      return await this.profesorService.findAll();
    }

    @Get("profesorId")
    async findById(@Param('profesorId') id: string){
        return await this.profesorService.findOne(id);
    }

    @Post()
    async create(@Body() clubDto: ProfesorDto) {
      const club: ProfesorEntity = plainToInstance(ProfesorEntity, clubDto);
      return await this.profesorService.create(club);
    }
  
    @Put(':profesorId')
    async update(@Param('profesorId') estudianteId: string, @Body() estudianteDto: ProfesorDto) {
      const club: ProfesorEntity = plainToInstance(ProfesorEntity, estudianteDto);
      return await this.profesorService.update(estudianteId, club);
    }
  
    @Delete(':profesorId')
    @HttpCode(204)
    async delete(@Param('profesorId') clubId: string) {
      return await this.profesorService.deleteId(clubId);
    }
}