import { PrestamoService } from './prestamo.service';
import { Prestamo } from './entities/prestamo.entity';
import { CreatePrestamoInput } from './dto/create-prestamo.input';
import { UpdatePrestamoInput } from './dto/update-prestamo.input';
export declare class PrestamoResolver {
    private readonly prestamoService;
    constructor(prestamoService: PrestamoService);
    createActivePrestamo(createPrestamoInput: CreatePrestamoInput): Promise<Prestamo>;
    createInactivePrestamo(createPrestamoInput: CreatePrestamoInput): Promise<Prestamo>;
    findAll(estado?: string): Promise<Prestamo[]>;
    findOne(id: number): Promise<Prestamo>;
    updatePrestamo(updatePrestamoInput: UpdatePrestamoInput): Promise<Prestamo>;
    removePrestamo(id: number): Promise<Prestamo>;
    findByEstado(estado: string): Promise<Prestamo[]>;
}
