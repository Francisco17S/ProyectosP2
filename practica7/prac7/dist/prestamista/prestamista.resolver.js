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
exports.PrestamistaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const prestamista_service_1 = require("./prestamista.service");
const prestamista_entity_1 = require("./entities/prestamista.entity");
const create_prestamista_input_1 = require("./dto/create-prestamista.input");
const update_prestamista_input_1 = require("./dto/update-prestamista.input");
let PrestamistaResolver = class PrestamistaResolver {
    constructor(prestamistaService) {
        this.prestamistaService = prestamistaService;
    }
    async createActivePrestamista(createPrestamistaInput) {
        createPrestamistaInput.estado = 'activo';
        return this.prestamistaService.create(createPrestamistaInput);
    }
    async createInactivePrestamista(createPrestamistaInput) {
        createPrestamistaInput.estado = 'inactivo';
        return this.prestamistaService.create(createPrestamistaInput);
    }
    async findAll(estado) {
        return this.prestamistaService.findAll(estado || 'todos');
    }
    async findOne(id) {
        return this.prestamistaService.findOne(id);
    }
    async updatePrestamista(updatePrestamistaInput) {
        return this.prestamistaService.update(updatePrestamistaInput.idprestamista, updatePrestamistaInput);
    }
    async removePrestamista(id) {
        return this.prestamistaService.remove(id);
    }
    async findByEstado(estado) {
        return this.prestamistaService.findAll(estado);
    }
};
exports.PrestamistaResolver = PrestamistaResolver;
__decorate([
    (0, graphql_1.Mutation)(() => prestamista_entity_1.Prestamista),
    __param(0, (0, graphql_1.Args)('createPrestamistaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestamista_input_1.CreatePrestamistaInput]),
    __metadata("design:returntype", Promise)
], PrestamistaResolver.prototype, "createActivePrestamista", null);
__decorate([
    (0, graphql_1.Mutation)(() => prestamista_entity_1.Prestamista),
    __param(0, (0, graphql_1.Args)('createPrestamistaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestamista_input_1.CreatePrestamistaInput]),
    __metadata("design:returntype", Promise)
], PrestamistaResolver.prototype, "createInactivePrestamista", null);
__decorate([
    (0, graphql_1.Query)(() => [prestamista_entity_1.Prestamista], { name: 'prestamistas' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrestamistaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => prestamista_entity_1.Prestamista, { name: 'prestamista' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrestamistaResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => prestamista_entity_1.Prestamista),
    __param(0, (0, graphql_1.Args)('updatePrestamistaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_prestamista_input_1.UpdatePrestamistaInput]),
    __metadata("design:returntype", Promise)
], PrestamistaResolver.prototype, "updatePrestamista", null);
__decorate([
    (0, graphql_1.Mutation)(() => prestamista_entity_1.Prestamista),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrestamistaResolver.prototype, "removePrestamista", null);
__decorate([
    (0, graphql_1.Query)(() => [prestamista_entity_1.Prestamista], { name: 'prestamistasByEstado' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrestamistaResolver.prototype, "findByEstado", null);
exports.PrestamistaResolver = PrestamistaResolver = __decorate([
    (0, graphql_1.Resolver)(() => prestamista_entity_1.Prestamista),
    __metadata("design:paramtypes", [prestamista_service_1.PrestamistaService])
], PrestamistaResolver);
//# sourceMappingURL=prestamista.resolver.js.map