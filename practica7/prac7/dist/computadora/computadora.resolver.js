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
exports.ComputadoraResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const computadora_service_1 = require("./computadora.service");
const computadora_entity_1 = require("./entities/computadora.entity");
const create_computadora_input_1 = require("./dto/create-computadora.input");
const update_computadora_input_1 = require("./dto/update-computadora.input");
let ComputadoraResolver = class ComputadoraResolver {
    constructor(computadoraService) {
        this.computadoraService = computadoraService;
    }
    async createActiveComputadora(createComputadoraInput) {
        createComputadoraInput.estado = 'activo';
        return this.computadoraService.create(createComputadoraInput);
    }
    async createInactiveComputadora(createComputadoraInput) {
        createComputadoraInput.estado = 'inactivo';
        return this.computadoraService.create(createComputadoraInput);
    }
    async findAll(estado) {
        return this.computadoraService.findAll(estado || 'todos');
    }
    async findOne(id) {
        return this.computadoraService.findOne(id);
    }
    async updateComputadora(updateComputadoraInput) {
        return this.computadoraService.update(updateComputadoraInput.idcomputadora, updateComputadoraInput);
    }
    async removeComputadora(id) {
        return this.computadoraService.remove(id);
    }
    async findByEstado(estado) {
        return this.computadoraService.findAll(estado);
    }
};
exports.ComputadoraResolver = ComputadoraResolver;
__decorate([
    (0, graphql_1.Mutation)(() => computadora_entity_1.Computadora),
    __param(0, (0, graphql_1.Args)('createComputadoraInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_computadora_input_1.CreateComputadoraInput]),
    __metadata("design:returntype", Promise)
], ComputadoraResolver.prototype, "createActiveComputadora", null);
__decorate([
    (0, graphql_1.Mutation)(() => computadora_entity_1.Computadora),
    __param(0, (0, graphql_1.Args)('createComputadoraInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_computadora_input_1.CreateComputadoraInput]),
    __metadata("design:returntype", Promise)
], ComputadoraResolver.prototype, "createInactiveComputadora", null);
__decorate([
    (0, graphql_1.Query)(() => [computadora_entity_1.Computadora], { name: 'computadoras' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComputadoraResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => computadora_entity_1.Computadora, { name: 'computadora' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComputadoraResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => computadora_entity_1.Computadora),
    __param(0, (0, graphql_1.Args)('updateComputadoraInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_computadora_input_1.UpdateComputadoraInput]),
    __metadata("design:returntype", Promise)
], ComputadoraResolver.prototype, "updateComputadora", null);
__decorate([
    (0, graphql_1.Mutation)(() => computadora_entity_1.Computadora),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComputadoraResolver.prototype, "removeComputadora", null);
__decorate([
    (0, graphql_1.Query)(() => [computadora_entity_1.Computadora], { name: 'computadorasByEstado' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComputadoraResolver.prototype, "findByEstado", null);
exports.ComputadoraResolver = ComputadoraResolver = __decorate([
    (0, graphql_1.Resolver)(() => computadora_entity_1.Computadora),
    __metadata("design:paramtypes", [computadora_service_1.ComputadoraService])
], ComputadoraResolver);
//# sourceMappingURL=computadora.resolver.js.map