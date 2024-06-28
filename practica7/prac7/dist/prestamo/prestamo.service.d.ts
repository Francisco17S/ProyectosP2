import { Repository } from 'typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Computadora } from '../computadora/entities/computadora.entity';
import { Prestamista } from '../prestamista/entities/prestamista.entity';
import { CreatePrestamoInput } from './dto/create-prestamo.input';
import { UpdatePrestamoInput } from './dto/update-prestamo.input';
export declare class PrestamoService {
    private readonly prestamoRepository;
    private readonly computadoraRepository;
    private readonly prestamistaRepository;
    constructor(prestamoRepository: Repository<Prestamo>, computadoraRepository: Repository<Computadora>, prestamistaRepository: Repository<Prestamista>);
    create(createPrestamoInput: CreatePrestamoInput): Promise<Prestamo>;
    findAll(estado?: string): Promise<Prestamo[]>;
    findOne(idprestamo: number): Promise<Prestamo>;
    update(idprestamo: number, updatePrestamoInput: UpdatePrestamoInput): Promise<Prestamo>;
    remove(id: number): Promise<Prestamo>;
}
