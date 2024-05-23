/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsNumber} from 'class-validator';
export class ProfesorDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  
  @IsNumber()
  @IsNotEmpty()
  readonly cedula: number;

  @IsNumber()
  @IsNotEmpty()
  readonly numExtension: number;

  @IsString()
  @IsNotEmpty()
  readonly grupoInvestigacion: string;

}