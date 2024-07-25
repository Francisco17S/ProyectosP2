import { CandidatoService } from './candidato.service';
import { Candidato } from './entities/candidato.entity';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
export declare class CandidatoResolver {
    private readonly candidatoService;
    constructor(candidatoService: CandidatoService);
    createActiveCandidato(createCandidatoDto: CreateCandidatoDto): Promise<Candidato>;
    findByCodigo(codigo: string): Promise<Candidato[]>;
    updateCandidato(updateCandidatoDto: UpdateCandidatoDto): Promise<Candidato>;
    findAll(estado?: string): Promise<Candidato[]>;
    findOne(id: number): Promise<Candidato>;
    removeCandidato(id: number): Promise<boolean>;
    findByNumeroDePersonasQueVotaron(minNumeroDePersonasQueVotaron: number): Promise<Candidato[]>;
}
