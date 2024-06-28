import { InputType, Field, Float } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateComputadoraInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  detallestecnicos: string;

  @Field(() => Float)
  @IsNumber()
  @IsNotEmpty()
  costoporhoraprestamo: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional() // Hacemos que este campo sea opcional
  estado?: string;
}
