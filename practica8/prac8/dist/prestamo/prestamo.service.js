"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestamoService = void 0;
const common_1 = require("@nestjs/common");
const prestamos = [
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
const users = [
    { id: '1', nombre: 'user1', isActive: true },
    { id: '2', nombre: 'user2', isActive: false },
    { id: '3', nombre: 'user3', isActive: true },
];
let PrestamoService = class PrestamoService {
    constructor() {
        this.connectedClients = {};
    }
    registerClient(socket, userId) {
        console.log('Registering client:', userId);
        const user = users.find(user => user.id === userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (!user.isActive) {
            throw new Error('El usuario no está activo');
        }
        const userConnections = Object.values(this.connectedClients).filter(client => client.user.id === user.id);
        if (userConnections.length >= 3) {
            throw new Error('Usuario ya tiene 3 conexiones activas');
        }
        this.connectedClients[socket.id] = {
            socket: socket,
            user: user
        };
        console.log('Client registered successfully:', socket.id);
    }
    removeClient(clienteId) {
        console.log('Removing client:', clienteId);
        delete this.connectedClients[clienteId];
    }
    getConnectedClients() {
        return Object.keys(this.connectedClients);
    }
    getUserFullName(socketId) {
        return this.connectedClients[socketId].user.nombre;
    }
    checkUserConnection(user) {
        for (const clientId of Object.keys(this.connectedClients)) {
            const connectedClient = this.connectedClients[clientId];
            if (connectedClient.user.id === user.id) {
                connectedClient.socket.disconnect();
                break;
            }
        }
    }
    create(createPrestamoDto) {
        const newPrestamo = {
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
    findAll() {
        return prestamos;
    }
};
exports.PrestamoService = PrestamoService;
exports.PrestamoService = PrestamoService = __decorate([
    (0, common_1.Injectable)()
], PrestamoService);
//# sourceMappingURL=prestamo.service.js.map