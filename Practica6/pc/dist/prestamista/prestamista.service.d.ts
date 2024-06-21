import { Repository } from 'typeorm';
import { Prestamista } from './entities/prestamista.entity';
import { CreatePrestamistaDto } from './dto/create-prestamista.dto';
import { UpdatePrestamistaDto } from './dto/update-prestamista.dto';
export declare class PrestamistaService {
    private readonly prestamistaRepository;
    constructor(prestamistaRepository: Repository<Prestamista>);
    create(createPrestamistaDto: CreatePrestamistaDto): Promise<Prestamista>;
    findAll(): Promise<Prestamista[]>;
    findOne(id: number): Promise<Prestamista>;
    update(id: number, updatePrestamistaDto: UpdatePrestamistaDto): Promise<Prestamista>;
    remove(id: number): Promise<Prestamista>;
}
