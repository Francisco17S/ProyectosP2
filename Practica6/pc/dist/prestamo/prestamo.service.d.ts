import { Repository } from 'typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Computadora } from '../computadora/entities/computadora.entity';
import { Prestamista } from '../prestamista/entities/prestamista.entity';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
export declare class PrestamoService {
    private readonly prestamoRepository;
    private readonly computadoraRepository;
    private readonly prestamistaRepository;
    constructor(prestamoRepository: Repository<Prestamo>, computadoraRepository: Repository<Computadora>, prestamistaRepository: Repository<Prestamista>);
    create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo>;
    findAll(): Promise<Prestamo[]>;
    findOne(idprestamo: number): Promise<Prestamo>;
    update(idprestamo: number, updatePrestamoDto: UpdatePrestamoDto): Promise<Prestamo>;
    remove(id: number): Promise<any>;
    private toResponseDto;
}
