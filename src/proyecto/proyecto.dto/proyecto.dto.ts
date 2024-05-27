/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsNumber} from 'class-validator';
export class ProyectoDto {
  @IsString()
  @IsNotEmpty()
  readonly fechaInicio: string;
  
  @IsString()
  @IsNotEmpty()
  readonly fechaFin: string;

  @IsNumber()
  @IsNotEmpty()
  readonly URL: string;

}