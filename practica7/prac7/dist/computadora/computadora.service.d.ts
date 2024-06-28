import { Repository } from 'typeorm';
import { Computadora } from './entities/computadora.entity';
import { CreateComputadoraInput } from './dto/create-computadora.input';
import { UpdateComputadoraInput } from './dto/update-computadora.input';
export declare class ComputadoraService {
    private readonly computadoraRepository;
    constructor(computadoraRepository: Repository<Computadora>);
    create(createComputadoraInput: CreateComputadoraInput): Promise<Computadora>;
    findAll(estado?: string): Promise<Computadora[]>;
    findOne(id: number): Promise<Computadora>;
    update(id: number, updateComputadoraInput: UpdateComputadoraInput): Promise<Computadora>;
    remove(id: number): Promise<Computadora>;
}
