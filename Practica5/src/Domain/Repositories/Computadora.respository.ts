import { CreateComputadoraDto, UpdateComputadoraDto } from '../Dtos';
import { ComputadoraEntity } from '../Entities/Computadora.entity';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export abstract class ComputadoraRepository {

  abstract create( createTodoDto: CreateComputadoraDto ): Promise<ComputadoraEntity>;
  abstract getAll(): Promise<ComputadoraEntity[]>;
  abstract findById( id: number ): Promise<ComputadoraEntity>;
  abstract updateById( updateTodoDto: UpdateComputadoraDto ): Promise<ComputadoraEntity>;
  abstract deleteById( id: number ): Promise<ComputadoraEntity>;

}