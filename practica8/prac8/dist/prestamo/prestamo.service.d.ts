import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { Socket } from 'socket.io';
import { Prestamo } from './entities/prestamo.entity';
interface User {
    id: string;
    nombre: string;
    isActive: boolean;
}
export declare class PrestamoService {
    private connectedClients;
    registerClient(socket: Socket, userId: string): void;
    removeClient(clienteId: string): void;
    getConnectedClients(): string[];
    getUserFullName(socketId: string): string;
    checkUserConnection(user: User): void;
    create(createPrestamoDto: CreatePrestamoDto): Prestamo;
    findAll(): Prestamo[];
}
export {};
