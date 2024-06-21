import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestamistaDto } from './create-prestamista.dto';

export class UpdatePrestamistaDto extends PartialType(CreatePrestamistaDto) {}
