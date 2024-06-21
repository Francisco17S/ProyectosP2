import { Computadora } from '../../computadora/entities/computadora.entity';
import { Prestamista } from '../../prestamista/entities/prestamista.entity';
export declare class Prestamo {
    idprestamo: number;
    computadora: Computadora;
    prestamista: Prestamista;
    fecha: string;
    hora: string;
    numeroHorasPrestamo: number;
    estado: string;
}
