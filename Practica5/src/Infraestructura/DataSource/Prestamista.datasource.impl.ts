import { prisma } from '../../Data-posgrest';
import { CreatePrestamistaDto } from '../../Domain/Dtos';
import { PrestamistaDatasource } from '../../Domain/DataSource/Prestamista.datasource'
import { PrestamistaEntity } from '../../Domain/Entities/Prestamista.entity'
import { UpdatePrestamistaDto } from '../../Domain/Dtos'

export class PrestamistaDatasourceImpl implements PrestamistaDatasource {

  async create(createPrestamistaDto: CreatePrestamistaDto): Promise<PrestamistaEntity> {
    const prestamista = await prisma.prestamista.create({
      data: createPrestamistaDto
    });

    return PrestamistaEntity.fromObject(prestamista);
  }

  async getAll(): Promise<PrestamistaEntity[]> {
    const prestamistas = await prisma.prestamista.findMany();
    return prestamistas.map(prestamista => PrestamistaEntity.fromObject(prestamista));
  }

  async findById(ID: number): Promise<PrestamistaEntity> {
    const prestamista = await prisma.prestamista.findFirst({
      where: { ID }
    });

    if (!prestamista) throw `Prestamista with ID ${ID} not found`;
    return PrestamistaEntity.fromObject(prestamista);
  }

  async updateById(updatePrestamistaDto: UpdatePrestamistaDto): Promise<PrestamistaEntity> {
    await this.findById(updatePrestamistaDto.id);
    
    const updatedPrestamista = await prisma.prestamista.update({
      where: { ID: updatePrestamistaDto.id },
      data: updatePrestamistaDto.values
    });

    return PrestamistaEntity.fromObject(updatedPrestamista);
  }

  async deleteById(ID: number): Promise<PrestamistaEntity> {
    await this.findById(ID);
    const deleted = await prisma.prestamista.delete({
      where: { ID }
    });

    return PrestamistaEntity.fromObject(deleted);
  }

}
