import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamista } from './entities/prestamista.entity';
import { CreatePrestamistaDto } from './dto/create-prestamista.dto';
import { UpdatePrestamistaDto } from './dto/update-prestamista.dto';

@Injectable()
export class PrestamistaService {
  constructor(
    @InjectRepository(Prestamista)
    private readonly prestamistaRepository: Repository<Prestamista>,
  ) {}

  async create(createPrestamistaDto: CreatePrestamistaDto): Promise<Prestamista> {
    const prestamista = this.prestamistaRepository.create(createPrestamistaDto);
    return this.prestamistaRepository.save(prestamista);
  }

  async findAll(): Promise<Prestamista[]> {
    return this.prestamistaRepository.find();
  }

  async findOne(id: number): Promise<Prestamista> {
    return this.prestamistaRepository.findOneBy({ idprestamista:id });
  }

  async update(id: number, updatePrestamistaDto: UpdatePrestamistaDto): Promise<Prestamista> {
    await this.prestamistaRepository.update(id, updatePrestamistaDto);
    return this.prestamistaRepository.findOneBy({ idprestamista:id });
  }

  async remove(id: number): Promise<Prestamista> {
    await this.prestamistaRepository.update(id, { estado: 'inactivo' });
    return this.prestamistaRepository.findOneBy({ idprestamista:id });
  }
}
