import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { PrestamoService } from './prestamo.service';
export declare class PrestamoGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly prestamoService;
    wss: Server;
    constructor(prestamoService: PrestamoService);
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
    handleDisconnect(client: Socket): void;
    onMessageFromClient(client: Socket): void;
    create(createPrestamoDto: CreatePrestamoDto): import("./entities/prestamo.entity").Prestamo;
    findAll(): import("./entities/prestamo.entity").Prestamo[];
}
