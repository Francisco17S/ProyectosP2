import { CreatePrestamoDto } from '../../Domain/Dtos';
import { PrestamoDatasource } from '../../Domain/DataSource/Prestamo.datasource'
import { PrestamoEntity } from '../../Domain/Entities/Prestamo.entity'
import { PrestamoRepository} from '../../Domain/Repositories/Prestamo.repository'
import { UpdatePrestamoDto } from '../../Domain/Dtos'

export class PrestamoRepositoryImpl implements PrestamoRepository {

  constructor(
    private readonly datasource: PrestamoDatasource,
  ) { }

  create(createPrestamoDto: CreatePrestamoDto): Promise<PrestamoEntity> {
    return this.datasource.create(createPrestamoDto);
  }

  getAll(): Promise<PrestamoEntity[]> {
    return this.datasource.getAll();
  }

  findById(ID: number): Promise<PrestamoEntity> {
    return this.datasource.findById(ID);
  }

  updateById(updatePrestamoDto: UpdatePrestamoDto): Promise<PrestamoEntity> {
    return this.datasource.updateById(updatePrestamoDto);
  }

  deleteById(ID: number): Promise<PrestamoEntity> {
    return this.datasource.deleteById(ID);
  }

}
