import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateComputadoraDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  detallestecnicos: string;

  @IsString()
  @IsNotEmpty()
  costoporhoraprestamo: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
