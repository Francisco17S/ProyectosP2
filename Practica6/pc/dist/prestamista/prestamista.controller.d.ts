import { PrestamistaService } from './prestamista.service';
import { CreatePrestamistaDto } from './dto/create-prestamista.dto';
import { UpdatePrestamistaDto } from './dto/update-prestamista.dto';
export declare class PrestamistaController {
    private readonly prestamistaService;
    constructor(prestamistaService: PrestamistaService);
    create(createPrestamistaDto: CreatePrestamistaDto): Promise<import("./entities/prestamista.entity").Prestamista>;
    findAll(): Promise<import("./entities/prestamista.entity").Prestamista[]>;
    findOne(id: number): Promise<import("./entities/prestamista.entity").Prestamista>;
    update(id: number, updatePrestamistaDto: UpdatePrestamistaDto): Promise<import("./entities/prestamista.entity").Prestamista>;
    remove(id: number): Promise<import("./entities/prestamista.entity").Prestamista>;
}
