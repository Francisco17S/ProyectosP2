import { IsNotEmpty } from 'class-validator';
import { CreateComputadoraInput } from './create-computadora.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateComputadoraInput extends PartialType(CreateComputadoraInput) {

  @Field(() => ID)
  @IsNotEmpty()
  idcomputadora: number;

}
