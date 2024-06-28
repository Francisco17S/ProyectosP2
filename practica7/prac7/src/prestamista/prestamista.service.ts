import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamista } from './entities/prestamista.entity';
import { CreatePrestamistaInput } from './dto/create-prestamista.input';
import { UpdatePrestamistaInput } from './dto/update-prestamista.input';

@Injectable()
export class PrestamistaService {
  constructor(
    @InjectRepository(Prestamista)
    private readonly prestamistaRepository: Repository<Prestamista>,
  ) {}

  create(createPrestamistaInput: CreatePrestamistaInput): Promise<Prestamista> {
    const prestamista = this.prestamistaRepository.create(createPrestamistaInput);
    if (!prestamista.estado) {
      prestamista.estado = 'activo'; // Establece el estado predeterminado aquí
    }
    return this.prestamistaRepository.save(prestamista);
  }

  findAll(estado: string = 'todos'): Promise<Prestamista[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.prestamistaRepository.find({ where: whereCondition });
  }

  findOne(id: number): Promise<Prestamista> {
    return this.prestamistaRepository.findOne({ where: { idprestamista: id } });
  }

  async update(id: number, updatePrestamistaInput: UpdatePrestamistaInput): Promise<Prestamista> {
    const prestamista = await this.prestamistaRepository.preload({
      idprestamista: id,
      ...updatePrestamistaInput,
    });
    if (!prestamista) {
      throw new NotFoundException(`Prestamista with ID ${id} not found`);
    }
    return this.prestamistaRepository.save(prestamista);
  }

  async remove(id: number): Promise<Prestamista> {
    const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: id });
    if (prestamista) {
      prestamista.estado = 'inactivo';
      return this.prestamistaRepository.save(prestamista);
    }
    return null;
  }
}
