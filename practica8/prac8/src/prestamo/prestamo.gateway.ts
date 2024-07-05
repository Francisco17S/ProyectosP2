import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { PrestamoService } from './prestamo.service';

@WebSocketGateway({ cors: true })
export class PrestamoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly prestamoService: PrestamoService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    console.log('Client attempting to connect:', client.id, 'with token:', token);
    try {
      // Validar el token
      await this.prestamoService.registerClient(client, token);
    } catch (error) {
      console.error('Connection error:', error.message);
      client.disconnect();
      return;
    }
    console.log('Client connected:', client.id);
    this.wss.emit('clients-updated', this.prestamoService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    this.prestamoService.removeClient(client.id);
    this.wss.emit('clients-updated', this.prestamoService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket) {
    //! todos reciben el mensaje
    this.wss.emit('message-from-server', {
      fullName: this.prestamoService.getUserFullName(client.id),
    });
  }

  @SubscribeMessage('agregar-transaccion')
  create(@MessageBody() createPrestamoDto: CreatePrestamoDto) {
    const inserted = this.prestamoService.create(createPrestamoDto);
    this.wss.emit('newPrestamo', this.findAll());
    return inserted;
  }

  @SubscribeMessage('consultar-activos')
  findAll() {
    return this.prestamoService.findAll();
  }
}
