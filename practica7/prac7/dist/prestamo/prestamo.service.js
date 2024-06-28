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
    async create(createPrestamoInput) {
        const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: createPrestamoInput.computadora_idcomputadora });
        const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: createPrestamoInput.prestamista_idprestamista });
        if (!computadora || !prestamista) {
            throw new common_1.NotFoundException('Computadora or Prestamista not found');
        }
        const prestamo = this.prestamoRepository.create({
            ...createPrestamoInput,
            computadora: computadora,
            prestamista: prestamista,
        });
        if (!prestamo.estado) {
            prestamo.estado = 'activo';
        }
        return this.prestamoRepository.save(prestamo);
    }
    findAll(estado = 'todos') {
        const whereCondition = estado === 'todos' ? {} : { estado };
        return this.prestamoRepository.find({ where: whereCondition, relations: ['computadora', 'prestamista'] });
    }
    async findOne(idprestamo) {
        const prestamo = await this.prestamoRepository.findOne({
            where: { idprestamo },
            relations: ['computadora', 'prestamista'],
        });
        if (!prestamo) {
            throw new common_1.NotFoundException('Prestamo not found');
        }
        return prestamo;
    }
    async update(idprestamo, updatePrestamoInput) {
        const prestamo = await this.prestamoRepository.findOneBy({ idprestamo });
        if (!prestamo) {
            throw new common_1.NotFoundException('Prestamo not found');
        }
        const computadora = await this.computadoraRepository.findOneBy({ idcomputadora: updatePrestamoInput.computadora_idcomputadora });
        const prestamista = await this.prestamistaRepository.findOneBy({ idprestamista: updatePrestamoInput.prestamista_idprestamista });
        if (!computadora || !prestamista) {
            throw new common_1.NotFoundException('Computadora or Prestamista not found');
        }
        const updatedPrestamo = {
            ...prestamo,
            ...updatePrestamoInput,
            computadora: computadora,
            prestamista: prestamista,
        };
        await this.prestamoRepository.save(updatedPrestamo);
        return updatedPrestamo;
    }
    async remove(id) {
        const prestamo = await this.prestamoRepository.findOneBy({ idprestamo: id });
        if (prestamo) {
            prestamo.estado = 'inactivo';
            return this.prestamoRepository.save(prestamo);
        }
        return null;
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