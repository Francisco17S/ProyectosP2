import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreatePrestamistaInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  identificacion: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional() // Hacemos que este campo sea opcional
  estado?: string;
}
