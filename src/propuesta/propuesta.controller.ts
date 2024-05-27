/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { PropuestaDto } from './propuesta.dto/propuesta.dto';
import { PropuestaEntity } from './propuesta.entity/propuesta.entity';
import { PropuestaService } from './propuesta.service';


@Controller('propuesta')
@UseInterceptors(BusinessErrorsInterceptor)
export class PropuestaController {
    constructor(private readonly propuestaService: PropuestaService){}
    
    @Get()
    async findAll() {
      return await this.propuestaService.findAll();
    }

    @Get("propuestaId")
    async findById(@Param('propuestaId') id: string){
        return await this.propuestaService.findOne(id);
    }

    @Post()
    async create(@Body() clubDto: PropuestaDto) {
      const club: PropuestaEntity = plainToInstance(PropuestaEntity, clubDto);
      return await this.propuestaService.create(club);
    }
  
    @Put(':propuestaId')
    async update(@Param('propuestaId') estudianteId: string, @Body() estudianteDto: PropuestaDto) {
      const club: PropuestaEntity = plainToInstance(PropuestaEntity, estudianteDto);
      return await this.propuestaService.update(estudianteId, club);
    }
  
    @Delete(':propuestaId')
    @HttpCode(204)
    async delete(@Param('propuestaId') clubId: string) {
      return await this.propuestaService.delete(clubId);
    }
}