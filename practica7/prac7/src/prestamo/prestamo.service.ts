import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Computadora } from '../computadora/entities/computadora.entity';
import { Prestamista } from '../prestamista/entities/prestamista.entity';
import { CreatePrestamoInput } from './dto/create-prestamo.input';
import { UpdatePrestamoInput } from './dto/update-prestamo.input';

@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly prestamoRepository: Repository<Prestamo>,
    @InjectRepository(Computadora)
    private readonly computadoraRepository: Repository<Computadora>,
    @InjectRepository(Prestamista)
    private readonly prestamistaRepository: Repository<Prestamista>,
  ) {}

  async create(createPrestamoInput: CreatePrestamoInput): Promise<Prestamo> {
    const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: createPrestamoInput.computadora_idcomputadora });
    const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: createPrestamoInput.prestamista_idprestamista });

    if (!computadora || !prestamista) {
      throw new NotFoundException('Computadora or Prestamista not found');
    }

    const prestamo = this.prestamoRepository.create({
      ...createPrestamoInput,
      computadora: computadora,
      prestamista: prestamista,
    });

    if (!prestamo.estado) {
      prestamo.estado = 'activo'; // Establece el estado predeterminado aquí
    }

    return this.prestamoRepository.save(prestamo);
  }

  findAll(estado: string = 'todos'): Promise<Prestamo[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.prestamoRepository.find({ where: whereCondition, relations: ['computadora', 'prestamista'] });
  }

  async findOne(idprestamo: number): Promise<Prestamo> {
    const prestamo = await this.prestamoRepository.findOne({
      where: { idprestamo },
      relations: ['computadora', 'prestamista'],
    });
    if (!prestamo) {
      throw new NotFoundException('Prestamo not found');
    }
    return prestamo;
  }

  async update(idprestamo: number, updatePrestamoInput: UpdatePrestamoInput): Promise<Prestamo> {
    const prestamo = await this.prestamoRepository.findOneBy({ idprestamo });

    if (!prestamo) {
      throw new NotFoundException('Prestamo not found');
    }

    const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: updatePrestamoInput.computadora_idcomputadora });
    const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: updatePrestamoInput.prestamista_idprestamista });

    if (!computadora || !prestamista) {
      throw new NotFoundException('Computadora or Prestamista not found');
    }

    const updatedPrestamo = {
      ...prestamo,
      ...updatePrestamoInput,
      computadora: computadora,
      prestamista: prestamista,
    };

    await this.prestamoRepository.save(updatedPrestamo);
    return updatedPrestamo;
  }

  async remove(id: number): Promise<Prestamo> {
    const prestamo = await this.prestamoRepository.findOneBy({ idprestamo: id });
    if (prestamo) {
      prestamo.estado = 'inactivo';
      return this.prestamoRepository.save(prestamo);
    }
    return null;
  }
}
