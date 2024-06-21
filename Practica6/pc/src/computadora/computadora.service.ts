import { Injectable } from '@nestjs/common';
import { CreateComputadoraDto } from './dto/create-computadora.dto';
import { UpdateComputadoraDto } from './dto/update-computadora.dto';
import { Repository } from 'typeorm';
import { Computadora } from './entities/computadora.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComputadoraService {
  constructor(
    @InjectRepository(Computadora)
    private readonly computadoraRepository: Repository<Computadora>,
  ) {}

  async create(createComputadoraDto: CreateComputadoraDto): Promise<Computadora> {
    const computadora = this.computadoraRepository.create(createComputadoraDto);
    return this.computadoraRepository.save(computadora);
  }

  async findAll(): Promise<Computadora[]> {
    return this.computadoraRepository.find();
  }

  async findOne(id: number): Promise<Computadora> {
    return this.computadoraRepository.findOneBy({ idcomputadora:id });
  }

  async update(id: number, updateComputadoraDto: UpdateComputadoraDto): Promise<Computadora> {
    await this.computadoraRepository.update(id, updateComputadoraDto);
    return this.computadoraRepository.findOneBy({ idcomputadora:id });
  }

  async remove(id: number): Promise<Computadora> {
    await this.computadoraRepository.update(id, { estado: 'inactivo' });
    return this.computadoraRepository.findOneBy({ idcomputadora:id });
  }
}
