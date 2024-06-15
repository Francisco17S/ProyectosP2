import { CreatePrestamoDto, UpdatePrestamoDto } from '../Dtos';
import { PrestamoEntity } from '../Entities/Prestamo.entity';



export abstract class PrestamoRepository {

  abstract create( createTodoDto: CreatePrestamoDto ): Promise<PrestamoEntity>;
  abstract getAll(): Promise<PrestamoEntity[]>;
  abstract findById( id: number ): Promise<PrestamoEntity>;
  abstract updateById( updateTodoDto: UpdatePrestamoDto ): Promise<PrestamoEntity>;
  abstract deleteById( id: number ): Promise<PrestamoEntity>;

}