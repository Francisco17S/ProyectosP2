import { PartialType } from '@nestjs/mapped-types';
import { CreateComputadoraDto } from './create-computadora.dto';

export class UpdateComputadoraDto extends PartialType(CreateComputadoraDto) {}
