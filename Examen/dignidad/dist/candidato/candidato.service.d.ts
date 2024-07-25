import { Repository } from 'typeorm';
import { Candidato } from './entities/candidato.entity';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
export declare class CandidatoService {
    private readonly candidatoRepository;
    constructor(candidatoRepository: Repository<Candidato>);
    create(createCandidatoDto: CreateCandidatoDto): Promise<Candidato>;
    findAll(estado?: string): Promise<Candidato[]>;
    findOne(id: number): Promise<Candidato>;
    findByCodigo(codigo: string): Promise<Candidato[]>;
    update(id: number, updateCandidatoDto: UpdateCandidatoDto): Promise<Candidato>;
    remove(id: number): Promise<void>;
    findByNumeroDePersonasQueVotaron(minNumeroDePersonasQueVotaron: number): Promise<Candidato[]>;
}
