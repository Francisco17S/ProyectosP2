import { prisma } from '../../Data-posgrest';
import { CreateComputadoraDto } from '../../Domain/Dtos';
import { ComputadoraDatasource } from '../../Domain/DataSource/Computadora.datasource'
import { ComputadoraEntity } from '../../Domain/Entities/Computadora.entity'
import { UpdateComputadoraDto } from '../../Domain/Dtos'

export class ComputadoraDatasourceImpl implements ComputadoraDatasource {

  async create(createComputadoraDto: CreateComputadoraDto): Promise<ComputadoraEntity> {
    const computadora = await prisma.computadora.create({
      data: createComputadoraDto
    });

    return ComputadoraEntity.fromObject(computadora);
  }

  async getAll(): Promise<ComputadoraEntity[]> {
    const computadoras = await prisma.computadora.findMany();
    return computadoras.map(computadora => ComputadoraEntity.fromObject(computadora));
  }

  async findById(ID: number): Promise<ComputadoraEntity> {
    const computadora = await prisma.computadora.findFirst({
      where: { ID }
    });

    if (!computadora) throw `Computadora with ID ${ID} not found`;
    return ComputadoraEntity.fromObject(computadora);
  }

  async updateById(updateComputadoraDto: UpdateComputadoraDto): Promise<ComputadoraEntity> {
    await this.findById(updateComputadoraDto.id);
    
    const updatedComputadora = await prisma.computadora.update({
      where: { ID: updateComputadoraDto.id },
      data: updateComputadoraDto.values
    });

    return ComputadoraEntity.fromObject(updatedComputadora);
  }

  async deleteById(ID: number): Promise<ComputadoraEntity> {
    await this.findById(ID);
    const deleted = await prisma.computadora.delete({
      where: { ID }
    });

    return ComputadoraEntity.fromObject(deleted);
  }

}