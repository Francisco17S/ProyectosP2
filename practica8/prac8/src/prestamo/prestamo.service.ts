import { Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { Socket } from 'socket.io';
import { Prestamo } from './entities/prestamo.entity';

const prestamos: Prestamo[] = [
  {
    idcomputadora: 1,
    idprestamista: 1,
    idprestamo: 1,
    fecha: '2023-07-01',
    hora: '10:00',
    numeroHorasPrestamo: 5
  },
  {
    idcomputadora: 2,
    idprestamista: 2,
    idprestamo: 2,
    fecha: '2023-07-02',
    hora: '11:00',
    numeroHorasPrestamo: 3
  },
];

interface User {
  id: string;
  nombre: string;
  isActive: boolean;
}

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    user: User;
  }
}

const users: User[] = [
  { id: '1', nombre: 'user1', isActive: true },
  { id: '2', nombre: 'user2', isActive: false },
  { id: '3', nombre: 'user3', isActive: true },
];

@Injectable()
export class PrestamoService {

  private connectedClients: ConnectedClients = {};

  registerClient(socket: Socket, userId: string) {
    console.log('Registering client:', userId);
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    if (!user.isActive) {
      throw new Error('El usuario no está activo');
    }
    const userConnections = Object.values(this.connectedClients).filter(
      client => client.user.id === user.id
    );

    if (userConnections.length >= 3) {
      throw new Error('Usuario ya tiene 3 conexiones activas');
    }

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    };
    console.log('Client registered successfully:', socket.id);
  }

  removeClient(clienteId: string) {
    console.log('Removing client:', clienteId);
    delete this.connectedClients[clienteId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserFullName(socketId: string): string {
    return this.connectedClients[socketId].user.nombre;
  }

  checkUserConnection(user: User) {
    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectedClient.socket.disconnect();
        break;
      }
    }
  }

  create(createPrestamoDto: CreatePrestamoDto): Prestamo {
    const newPrestamo: Prestamo = {
      idcomputadora: createPrestamoDto.idcomputadora,
      idprestamista: createPrestamoDto.idprestamista,
      idprestamo: createPrestamoDto.idprestamo,
      fecha: createPrestamoDto.fecha,
      hora: createPrestamoDto.hora,
      numeroHorasPrestamo: createPrestamoDto.numeroHorasPrestamo
    };
    prestamos.push(newPrestamo);
    return newPrestamo;
  }

  findAll(): Prestamo[] {
    return prestamos;
  }
}
