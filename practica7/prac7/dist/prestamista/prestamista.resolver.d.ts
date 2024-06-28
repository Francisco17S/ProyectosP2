import { PrestamistaService } from './prestamista.service';
import { Prestamista } from './entities/prestamista.entity';
import { CreatePrestamistaInput } from './dto/create-prestamista.input';
import { UpdatePrestamistaInput } from './dto/update-prestamista.input';
export declare class PrestamistaResolver {
    private readonly prestamistaService;
    constructor(prestamistaService: PrestamistaService);
    createActivePrestamista(createPrestamistaInput: CreatePrestamistaInput): Promise<Prestamista>;
    createInactivePrestamista(createPrestamistaInput: CreatePrestamistaInput): Promise<Prestamista>;
    findAll(estado?: string): Promise<Prestamista[]>;
    findOne(id: number): Promise<Prestamista>;
    updatePrestamista(updatePrestamistaInput: UpdatePrestamistaInput): Promise<Prestamista>;
    removePrestamista(id: number): Promise<Prestamista>;
    findByEstado(estado: string): Promise<Prestamista[]>;
}
