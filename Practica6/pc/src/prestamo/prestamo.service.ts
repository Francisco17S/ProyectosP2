import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Computadora } from '../computadora/entities/computadora.entity';
import { Prestamista } from '../prestamista/entities/prestamista.entity';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

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

  async create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
    const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: createPrestamoDto.computadora_idcomputadora });
    const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: createPrestamoDto.prestamista_idprestamista });

    if (!computadora || !prestamista) {
      throw new Error('Computadora or Prestamista not found');
    }

    const prestamo = this.prestamoRepository.create({
      ...createPrestamoDto,
      computadora: computadora,
      prestamista: prestamista,
    });

    return this.prestamoRepository.save(prestamo);
  }

  async findAll(): Promise<Prestamo[]> {
    return this.prestamoRepository.find({ relations: ['computadora', 'prestamista'] });
  }

  async findOne(idprestamo: number): Promise<Prestamo> {
    const prestamo = await this.prestamoRepository.findOne({
      where: { idprestamo },
      relations: ['computadora', 'prestamista'],
    });
    if (!prestamo) {
      throw new Error('Prestamo not found');
    }
    return prestamo;
  }

  async update(idprestamo: number, updatePrestamoDto: UpdatePrestamoDto): Promise<Prestamo> {
    const prestamo = await this.prestamoRepository.findOneBy({ idprestamo });

    if (!prestamo) {
      throw new Error('Prestamo not found');
    }

    const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: updatePrestamoDto.computadora_idcomputadora });
    const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: updatePrestamoDto.prestamista_idprestamista });

    if (!computadora || !prestamista) {
      throw new Error('Computadora or Prestamista not found');
    }

    const updatedPrestamo = {
      ...prestamo,
      ...updatePrestamoDto,
      computadora: computadora,
      prestamista: prestamista,
    };

    await this.prestamoRepository.save(updatedPrestamo);
    return updatedPrestamo;
  }

  async remove(id: number): Promise<any> {
    if (!id) {
      throw new Error('Invalid id provided');
    }

    await this.prestamoRepository.update(id, { estado: 'inactivo' });
    const prestamo = await this.prestamoRepository.findOne({
      where: { idprestamo: id },
      relations: ['prestamista', 'computadora'],
    });

    if (!prestamo) {
      throw new Error('Prestamo not found');
    }

    return this.toResponseDto(prestamo);
  }

  private toResponseDto(prestamo: Prestamo): any {
    return {
      idprestamo: prestamo.idprestamo,
      prestamista_idprestamista: prestamo.prestamista ? prestamo.prestamista.idprestamista : null,
      computadora_idcomputadora: prestamo.computadora ? prestamo.computadora.idcomputadora : null,
      fecha: prestamo.fecha,
      hora: prestamo.hora,
      numeroHorasPrestamo: prestamo.numeroHorasPrestamo,
      estado: prestamo.estado,
    };
  }
}
