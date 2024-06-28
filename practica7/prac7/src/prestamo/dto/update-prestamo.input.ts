import { CreatePrestamoInput } from './create-prestamo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';


@InputType()
export class UpdatePrestamoInput extends PartialType(CreatePrestamoInput) {
  @Field(() => ID)
  @IsNotEmpty()
  idprestamo: number;
}
