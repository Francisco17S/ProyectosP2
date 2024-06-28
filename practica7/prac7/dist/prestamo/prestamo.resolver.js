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
exports.PrestamoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const prestamo_service_1 = require("./prestamo.service");
const prestamo_entity_1 = require("./entities/prestamo.entity");
const create_prestamo_input_1 = require("./dto/create-prestamo.input");
const update_prestamo_input_1 = require("./dto/update-prestamo.input");
let PrestamoResolver = class PrestamoResolver {
    constructor(prestamoService) {
        this.prestamoService = prestamoService;
    }
    async createActivePrestamo(createPrestamoInput) {
        createPrestamoInput.estado = 'activo';
        return this.prestamoService.create(createPrestamoInput);
    }
    async createInactivePrestamo(createPrestamoInput) {
        createPrestamoInput.estado = 'inactivo';
        return this.prestamoService.create(createPrestamoInput);
    }
    async findAll(estado) {
        return this.prestamoService.findAll(estado || 'todos');
    }
    async findOne(id) {
        return this.prestamoService.findOne(id);
    }
    async updatePrestamo(updatePrestamoInput) {
        return this.prestamoService.update(updatePrestamoInput.idprestamo, updatePrestamoInput);
    }
    async removePrestamo(id) {
        return this.prestamoService.remove(id);
    }
    async findByEstado(estado) {
        return this.prestamoService.findAll(estado);
    }
};
exports.PrestamoResolver = PrestamoResolver;
__decorate([
    (0, graphql_1.Mutation)(() => prestamo_entity_1.Prestamo),
    __param(0, (0, graphql_1.Args)('createPrestamoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestamo_input_1.CreatePrestamoInput]),
    __metadata("design:returntype", Promise)
], PrestamoResolver.prototype, "createActivePrestamo", null);
__decorate([
    (0, graphql_1.Mutation)(() => prestamo_entity_1.Prestamo),
    __param(0, (0, graphql_1.Args)('createPrestamoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestamo_input_1.CreatePrestamoInput]),
    __metadata("design:returntype", Promise)
], PrestamoResolver.prototype, "createInactivePrestamo", null);
__decorate([
    (0, graphql_1.Query)(() => [prestamo_entity_1.Prestamo], { name: 'prestamos' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrestamoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => prestamo_entity_1.Prestamo, { name: 'prestamo' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrestamoResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => prestamo_entity_1.Prestamo),
    __param(0, (0, graphql_1.Args)('updatePrestamoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_prestamo_input_1.UpdatePrestamoInput]),
    __metadata("design:returntype", Promise)
], PrestamoResolver.prototype, "updatePrestamo", null);
__decorate([
    (0, graphql_1.Mutation)(() => prestamo_entity_1.Prestamo),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrestamoResolver.prototype, "removePrestamo", null);
__decorate([
    (0, graphql_1.Query)(() => [prestamo_entity_1.Prestamo], { name: 'prestamosByEstado' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrestamoResolver.prototype, "findByEstado", null);
exports.PrestamoResolver = PrestamoResolver = __decorate([
    (0, graphql_1.Resolver)(() => prestamo_entity_1.Prestamo),
    __metadata("design:paramtypes", [prestamo_service_1.PrestamoService])
], PrestamoResolver);
//# sourceMappingURL=prestamo.resolver.js.map