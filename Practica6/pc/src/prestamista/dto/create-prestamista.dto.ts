import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreatePrestamistaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
  
    @IsString()
    @IsNotEmpty()
    identificacion: string;
  
    @IsString()
    @IsNotEmpty()
    estado: string;
  }
  