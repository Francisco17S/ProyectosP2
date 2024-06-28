import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Computadora } from './entities/computadora.entity';
import { CreateComputadoraInput } from './dto/create-computadora.input';
import { UpdateComputadoraInput } from './dto/update-computadora.input';

@Injectable()
export class ComputadoraService {
  constructor(
    @InjectRepository(Computadora)
    private readonly computadoraRepository: Repository<Computadora>,
  ) {}

  create(createComputadoraInput: CreateComputadoraInput): Promise<Computadora> {
    const computadora = this.computadoraRepository.create(createComputadoraInput);
    if (!computadora.estado) {
      computadora.estado = 'activo'; // Establece el estado predeterminado aquí
    }
    return this.computadoraRepository.save(computadora);
  }

  findAll(estado: string = 'todos'): Promise<Computadora[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.computadoraRepository.find({ where: whereCondition });
  }

  findOne(id: number): Promise<Computadora> {
    return this.computadoraRepository.findOne({ where: { idcomputadora: id } });
  }

  async update(id: number, updateComputadoraInput: UpdateComputadoraInput): Promise<Computadora> {
    await this.computadoraRepository.update(id, updateComputadoraInput);
    return this.computadoraRepository.findOneBy({ idcomputadora: id });
  }

  async remove(id: number): Promise<Computadora> {
    const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: id });
    if (computadora) {
      computadora.estado = 'inactivo';
      return this.computadoraRepository.save(computadora);
    }
    return null;
  }
}
