import { Prestamo } from '../../prestamo/entities/prestamo.entity';
export declare class Prestamista {
    idprestamista: number;
    nombre: string;
    identificacion: string;
    estado: string;
    prestamos: Prestamo[];
}
