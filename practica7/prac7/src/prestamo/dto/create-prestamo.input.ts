import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsDateString, IsOptional } from 'class-validator';

@InputType()
export class CreatePrestamoInput {
  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  computadora_idcomputadora: number;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  prestamista_idprestamista: number;

  @Field()
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  hora: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  numeroHorasPrestamo: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional() // Hacemos que este campo sea opcional
  estado?: string;
}
