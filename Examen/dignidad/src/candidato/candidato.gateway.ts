import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Candidato } from './entities/candidato.entity';

interface ClientData {
  socket: Socket;
  empresa: string;
}

@WebSocketGateway()
export class CandidatoGateway {
  @WebSocketServer()
  server: Server;

  private clients: ClientData[] = [];

  @SubscribeMessage('examen6A')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: Candidato): void {
    // Almacenar el cliente y su empresa asociada
    this.clients.push({ socket: client, empresa: payload.empresa });

    // Filtrar y enviar el mensaje a los clientes que coinciden con la empresa
    const matchingClients = this.clients.filter(c => c.empresa === payload.empresa);
    matchingClients.forEach(c => c.socket.emit('examen6A', payload));
  }
}
