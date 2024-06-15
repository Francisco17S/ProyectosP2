import { CreateComputadoraDto, UpdateComputadoraDto } from '../Dtos';
import { ComputadoraEntity } from '../Entities/Computadora.entity';



export abstract class ComputadoraDatasource {

  abstract create( createTodoDto: CreateComputadoraDto ): Promise<ComputadoraEntity>;
  abstract getAll(): Promise<ComputadoraEntity[]>;
  abstract findById( id: number ): Promise<ComputadoraEntity>;
  abstract updateById( updateTodoDto: UpdateComputadoraDto ): Promise<ComputadoraEntity>;
  abstract deleteById( id: number ): Promise<ComputadoraEntity>;

}