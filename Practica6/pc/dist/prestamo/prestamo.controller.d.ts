import { PrestamoService } from './prestamo.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
export declare class PrestamoController {
    private readonly prestamoService;
    constructor(prestamoService: PrestamoService);
    create(createPrestamoDto: CreatePrestamoDto): Promise<import("./entities/prestamo.entity").Prestamo>;
    findAll(): Promise<import("./entities/prestamo.entity").Prestamo[]>;
    findOne(id: number): Promise<import("./entities/prestamo.entity").Prestamo>;
    update(id: number, updatePrestamoDto: UpdatePrestamoDto): Promise<import("./entities/prestamo.entity").Prestamo>;
    remove(id: number): Promise<any>;
}
