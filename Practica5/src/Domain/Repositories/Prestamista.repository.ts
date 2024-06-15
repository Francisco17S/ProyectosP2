import { CreatePrestamistaDto, UpdatePrestamistaDto } from '../Dtos';
import { PrestamistaEntity } from '../Entities/Prestamista.entity';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export abstract class PrestamistaRepository {

  abstract create( createTodoDto: CreatePrestamistaDto ): Promise<PrestamistaEntity>;
  abstract getAll(): Promise<PrestamistaEntity[]>;
  abstract findById( id: number ): Promise<PrestamistaEntity>;
  abstract updateById( updateTodoDto: UpdatePrestamistaDto ): Promise<PrestamistaEntity>;
  abstract deleteById( id: number ): Promise<PrestamistaEntity>;

}