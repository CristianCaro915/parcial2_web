/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { ProyectoDto } from './proyecto.dto/proyecto.dto';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { ProyectoService } from './proyecto.service';


@Controller('proyecto')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProyectoController {
    constructor(private readonly proyectoService: ProyectoService){}
    
    @Get()
    async findAll() {
      return await this.proyectoService.findAll();
    }

    @Get("proyectoId")
    async findById(@Param('proyectoId') id: string){
        return await this.proyectoService.findOne(id);
    }

    @Post()
    async create(@Body() clubDto: ProyectoDto) {
      const club: ProyectoEntity = plainToInstance(ProyectoEntity, clubDto);
      return await this.proyectoService.create(club);
    }
  
    @Put(':proyectoId')
    async update(@Param('proyectoId') estudianteId: string, @Body() estudianteDto: ProyectoDto) {
      const club: ProyectoEntity = plainToInstance(ProyectoEntity, estudianteDto);
      return await this.proyectoService.update(estudianteId, club);
    }
  
    @Delete(':proyectoId')
    @HttpCode(204)
    async delete(@Param('proyectoId') clubId: string) {
      return await this.proyectoService.delete(clubId);
    }
}