import { Prestamo } from './../../prestamo/entities/prestamo.entity';
export declare class Computadora {
    idcomputadora: number;
    descripcion: string;
    detallestecnicos: string;
    costoporhoraprestamo: number;
    estado: string;
    prestamos: Prestamo[];
}
