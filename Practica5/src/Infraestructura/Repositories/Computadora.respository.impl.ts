import { CreateComputadoraDto } from '../../Domain/Dtos';
import { ComputadoraDatasource } from '../../Domain/DataSource/Computadora.datasource'
import { ComputadoraEntity } from '../../Domain/Entities/Computadora.entity'
import { ComputadoraRepository} from '../../Domain/Repositories/Computadora.respository'
import { UpdateComputadoraDto } from '../../Domain/Dtos'

export class ComputadoraRepositoryImpl implements ComputadoraRepository {

  constructor(
    private readonly datasource: ComputadoraDatasource,
  ) { }

  create(createComputadoraDto: CreateComputadoraDto): Promise<ComputadoraEntity> {
    return this.datasource.create(createComputadoraDto);
  }

  getAll(): Promise<ComputadoraEntity[]> {
    return this.datasource.getAll();
  }

  findById(ID: number): Promise<ComputadoraEntity> {
    return this.datasource.findById(ID);
  }

  updateById(updateComputadoraDto: UpdateComputadoraDto): Promise<ComputadoraEntity> {
    return this.datasource.updateById(updateComputadoraDto);
  }

  deleteById(ID: number): Promise<ComputadoraEntity> {
    return this.datasource.deleteById(ID);
  }

}
