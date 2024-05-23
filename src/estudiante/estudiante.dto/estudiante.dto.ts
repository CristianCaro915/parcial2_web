/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
export class EstudianteDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  
  @IsString()
  @IsNotEmpty()
  readonly codigo: string;

  @IsNumber()
  @IsNotEmpty()
  readonly numCreditos: number;
}