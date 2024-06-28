import { ComputadoraService } from './computadora.service';
import { Computadora } from './entities/computadora.entity';
import { CreateComputadoraInput } from './dto/create-computadora.input';
import { UpdateComputadoraInput } from './dto/update-computadora.input';
export declare class ComputadoraResolver {
    private readonly computadoraService;
    constructor(computadoraService: ComputadoraService);
    createActiveComputadora(createComputadoraInput: CreateComputadoraInput): Promise<Computadora>;
    createInactiveComputadora(createComputadoraInput: CreateComputadoraInput): Promise<Computadora>;
    findAll(estado?: string): Promise<Computadora[]>;
    findOne(id: number): Promise<Computadora>;
    updateComputadora(updateComputadoraInput: UpdateComputadoraInput): Promise<Computadora>;
    removeComputadora(id: number): Promise<Computadora>;
    findByEstado(estado: string): Promise<Computadora[]>;
}
