import { InputType, Field, ID, Int, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsString,IsNumber, IsPositive, IsDateString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './create-candidato.dto';

@InputType()
export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {
  @Field(() => ID)
  @IsNotEmpty()
  id: number;

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
