import { Server, Socket } from 'socket.io';
import { Candidato } from './entities/candidato.entity';
export declare class CandidatoGateway {
    server: Server;
    private clients;
    handleMessage(client: Socket, payload: Candidato): void;
}
