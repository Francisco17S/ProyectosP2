import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsPositive, IsDateString } from 'class-validator';

@InputType()
export class CreateCandidatoDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  dignidad: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  participantes: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  tipo_medio: string;

  @Field(() => Float)
  @IsNumber()
  @IsPositive()
  numero_de_personas_que_votaron: number;

  @Field()
  @IsDateString()
  fecha_de_conteo_de_votos: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  empresa: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string;
}
