import { IsString, IsNotEmpty, IsUUID, IsNumber, IsDateString } from 'class-validator';

export class CreatePrestamoDto {

  @IsNumber()
  @IsNotEmpty()
  computadora_idcomputadora: number;

  
  @IsNumber()
  @IsNotEmpty()
  prestamista_idprestamista: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  hora: string;

  @IsNumber()
  @IsNotEmpty()
  numeroHorasPrestamo: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
