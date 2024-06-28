import { Repository } from 'typeorm';
import { Prestamista } from './entities/prestamista.entity';
import { CreatePrestamistaInput } from './dto/create-prestamista.input';
import { UpdatePrestamistaInput } from './dto/update-prestamista.input';
export declare class PrestamistaService {
    private readonly prestamistaRepository;
    constructor(prestamistaRepository: Repository<Prestamista>);
    create(createPrestamistaInput: CreatePrestamistaInput): Promise<Prestamista>;
    findAll(estado?: string): Promise<Prestamista[]>;
    findOne(id: number): Promise<Prestamista>;
    update(id: number, updatePrestamistaInput: UpdatePrestamistaInput): Promise<Prestamista>;
    remove(id: number): Promise<Prestamista>;
}
