/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsNumber} from 'class-validator';
export class PropuestaDto {
  @IsString()
  @IsNotEmpty()
  readonly titulo: string;
  
  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  readonly palabraClave: number;

}