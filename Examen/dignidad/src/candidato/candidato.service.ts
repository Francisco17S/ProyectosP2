import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { Candidato } from './entities/candidato.entity';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';

@Injectable()
export class CandidatoService {
  constructor(
    @InjectRepository(Candidato)
    private readonly candidatoRepository: Repository<Candidato>,
  ) {}

  create(createCandidatoDto: CreateCandidatoDto): Promise<Candidato> {
    const candidato = this.candidatoRepository.create(createCandidatoDto);
    return this.candidatoRepository.save(candidato);
  }

  findAll(estado: string = 'todos'): Promise<Candidato[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.candidatoRepository.find({ where: whereCondition });
  }

  findOne(id: number): Promise<Candidato> {
    return this.candidatoRepository.findOne({ where: { id } });
  }

  async findByCodigo(codigo: string): Promise<Candidato[]> {
    return this.candidatoRepository.find({
      where: { codigo },
    });
  }

  async update(id: number, updateCandidatoDto: UpdateCandidatoDto): Promise<Candidato> {
    await this.candidatoRepository.update(id, updateCandidatoDto);
    return this.candidatoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.candidatoRepository.delete(id);
  }

  async findByNumeroDePersonasQueVotaron(minNumeroDePersonasQueVotaron: number): Promise<Candidato[]> {
    return this.candidatoRepository.find({
      where: {
        numero_de_personas_que_votaron: MoreThan(minNumeroDePersonasQueVotaron),
      },
    });
  }
}
