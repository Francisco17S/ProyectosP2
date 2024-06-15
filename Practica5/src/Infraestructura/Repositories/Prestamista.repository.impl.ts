import { CreatePrestamistaDto } from '../../Domain/Dtos';
import { PrestamistaDatasource } from '../../Domain/DataSource/Prestamista.datasource'
import { PrestamistaEntity } from '../../Domain/Entities/Prestamista.entity'
import { PrestamistaRepository} from '../../Domain/Repositories/Prestamista.repository'
import { UpdatePrestamistaDto } from '../../Domain/Dtos'

export class PrestamistaRepositoryImpl implements PrestamistaRepository {

  constructor(
    private readonly datasource: PrestamistaDatasource,
  ) { }

  create(createPrestamistaDto: CreatePrestamistaDto): Promise<PrestamistaEntity> {
    return this.datasource.create(createPrestamistaDto);
  }

  getAll(): Promise<PrestamistaEntity[]> {
    return this.datasource.getAll();
  }

  findById(ID: number): Promise<PrestamistaEntity> {
    return this.datasource.findById(ID);
  }

  updateById(updatePrestamistaDto: UpdatePrestamistaDto): Promise<PrestamistaEntity> {
    return this.datasource.updateById(updatePrestamistaDto);
  }

  deleteById(ID: number): Promise<PrestamistaEntity> {
    return this.datasource.deleteById(ID);
  }

}
