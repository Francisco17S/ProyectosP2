"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestamoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prestamo_entity_1 = require("./entities/prestamo.entity");
const computadora_entity_1 = require("../computadora/entities/computadora.entity");
const prestamista_entity_1 = require("../prestamista/entities/prestamista.entity");
let PrestamoService = class PrestamoService {
    constructor(prestamoRepository, computadoraRepository, prestamistaRepository) {
        this.prestamoRepository = prestamoRepository;
        this.computadoraRepository = computadoraRepository;
        this.prestamistaRepository = prestamistaRepository;
    }
    async create(createPrestamoDto) {
        const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: createPrestamoDto.computadora_idcomputadora });
        const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: createPrestamoDto.prestamista_idprestamista });
        if (!computadora || !prestamista) {
            throw new Error('Computadora or Prestamista not found');
        }
        const prestamo = this.prestamoRepository.create({
            ...createPrestamoDto,
            computadora: computadora,
            prestamista: prestamista,
        });
        return this.prestamoRepository.save(prestamo);
    }
    async findAll() {
        return this.prestamoRepository.find({ relations: ['computadora', 'prestamista'] });
    }
    async findOne(idprestamo) {
        const prestamo = await this.prestamoRepository.findOne({
            where: { idprestamo },
            relations: ['computadora', 'prestamista'],
        });
        if (!prestamo) {
            throw new Error('Prestamo not found');
        }
        return prestamo;
    }
    async update(idprestamo, updatePrestamoDto) {
        const prestamo = await this.prestamoRepository.findOneBy({ idprestamo });
        if (!prestamo) {
            throw new Error('Prestamo not found');
        }
        const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: updatePrestamoDto.computadora_idcomputadora });
        const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: updatePrestamoDto.prestamista_idprestamista });
        if (!computadora || !prestamista) {
            throw new Error('Computadora or Prestamista not found');
        }
        const updatedPrestamo = {
            ...prestamo,
            ...updatePrestamoDto,
            computadora: computadora,
            prestamista: prestamista,
        };
        await this.prestamoRepository.save(updatedPrestamo);
        return updatedPrestamo;
    }
    async remove(id) {
        if (!id) {
            throw new Error('Invalid id provided');
        }
        await this.prestamoRepository.update(id, { estado: 'inactivo' });
        const prestamo = await this.prestamoRepository.findOne({
            where: { idprestamo: id },
            relations: ['prestamista', 'computadora'],
        });
        if (!prestamo) {
            throw new Error('Prestamo not found');
        }
        return this.toResponseDto(prestamo);
    }
    toResponseDto(prestamo) {
        return {
            idprestamo: prestamo.idprestamo,
            prestamista_idprestamista: prestamo.prestamista ? prestamo.prestamista.idprestamista : null,
            computadora_idcomputadora: prestamo.computadora ? prestamo.computadora.idcomputadora : null,
            fecha: prestamo.fecha,
            hora: prestamo.hora,
            numeroHorasPrestamo: prestamo.numeroHorasPrestamo,
            estado: prestamo.estado,
        };
    }
};
exports.PrestamoService = PrestamoService;
exports.PrestamoService = PrestamoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prestamo_entity_1.Prestamo)),
    __param(1, (0, typeorm_1.InjectRepository)(computadora_entity_1.Computadora)),
    __param(2, (0, typeorm_1.InjectRepository)(prestamista_entity_1.Prestamista)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PrestamoService);
//# sourceMappingURL=prestamo.service.js.map