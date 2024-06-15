import { prisma } from '../../Data-posgrest';
import { CreatePrestamoDto } from '../../Domain/Dtos';
import { PrestamoDatasource } from '../../Domain/DataSource/Prestamo.datasource'
import { PrestamoEntity } from '../../Domain/Entities/Prestamo.entity'
import { UpdatePrestamoDto } from '../../Domain/Dtos'


export class PrestamoDatasourceImpl implements PrestamoDatasource {

    async create(createPrestamoDto: CreatePrestamoDto): Promise<PrestamoEntity> {
      const prestamo = await prisma.prestamo.create({
        data: {
          fecha: createPrestamoDto.fecha,
          hora: createPrestamoDto.hora,
          numeroHorasPrestamo: createPrestamoDto.numeroHorasPrestamo,
          computadora: { connect: { ID: createPrestamoDto.computadoraId } },
          prestamista: { connect: { ID: createPrestamoDto.prestamistaId } }
        }
      });
  
      return PrestamoEntity.fromObject(prestamo);
    }
  
    async getAll(): Promise<PrestamoEntity[]> {
      const prestamos = await prisma.prestamo.findMany();
      return prestamos.map(prestamo => PrestamoEntity.fromObject(prestamo));
    }
  
    async findById(ID: number): Promise<PrestamoEntity> {
      const prestamo = await prisma.prestamo.findFirst({
        where: { ID }
      });
  
      if (!prestamo) throw `Prestamo with ID ${ID} not found`;
      return PrestamoEntity.fromObject(prestamo);
    }
  
    async updateById(updatePrestamoDto: UpdatePrestamoDto): Promise<PrestamoEntity> {
      await this.findById(updatePrestamoDto.id);
      
      const updatedPrestamo = await prisma.prestamo.update({
        where: { ID: updatePrestamoDto.id },
        data: {
          ...updatePrestamoDto.values,
          computadora: updatePrestamoDto.computadoraId ? { connect: { ID: updatePrestamoDto.computadoraId } } : undefined,
          prestamista: updatePrestamoDto.prestamistaId ? { connect: { ID: updatePrestamoDto.prestamistaId } } : undefined
        }
      });
  
      return PrestamoEntity.fromObject(updatedPrestamo);
    }
  
    async deleteById(ID: number): Promise<PrestamoEntity> {
      await this.findById(ID);
      const deleted = await prisma.prestamo.delete({
        where: { ID }
      });
  
      return PrestamoEntity.fromObject(deleted);
    }
  
  }