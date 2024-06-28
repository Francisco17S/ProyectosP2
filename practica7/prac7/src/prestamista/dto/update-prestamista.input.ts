import { CreatePrestamistaInput } from './create-prestamista.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';


@InputType()
export class UpdatePrestamistaInput extends PartialType(CreatePrestamistaInput) {

  @Field(() => ID)
  @IsNotEmpty()
  idprestamista: number;

}
