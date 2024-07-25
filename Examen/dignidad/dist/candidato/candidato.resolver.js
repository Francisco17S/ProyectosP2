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
exports.CandidatoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const candidato_service_1 = require("./candidato.service");
const candidato_entity_1 = require("./entities/candidato.entity");
const create_candidato_dto_1 = require("./dto/create-candidato.dto");
const update_candidato_dto_1 = require("./dto/update-candidato.dto");
let CandidatoResolver = class CandidatoResolver {
    constructor(candidatoService) {
        this.candidatoService = candidatoService;
    }
    async createActiveCandidato(createCandidatoDto) {
        createCandidatoDto.estado = 'Activo';
        return this.candidatoService.create(createCandidatoDto);
    }
    async findByCodigo(codigo) {
        return this.candidatoService.findByCodigo(codigo);
    }
    async updateCandidato(updateCandidatoDto) {
        return this.candidatoService.update(updateCandidatoDto.id, updateCandidatoDto);
    }
    async findAll(estado) {
        return this.candidatoService.findAll(estado || 'todos');
    }
    async findOne(id) {
        return this.candidatoService.findOne(id);
    }
    async removeCandidato(id) {
        await this.candidatoService.remove(id);
        return true;
    }
    async findByNumeroDePersonasQueVotaron(minNumeroDePersonasQueVotaron) {
        return this.candidatoService.findByNumeroDePersonasQueVotaron(minNumeroDePersonasQueVotaron);
    }
};
exports.CandidatoResolver = CandidatoResolver;
__decorate([
    (0, graphql_1.Mutation)(() => candidato_entity_1.Candidato),
    __param(0, (0, graphql_1.Args)('createCandidatoDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidato_dto_1.CreateCandidatoDto]),
    __metadata("design:returntype", Promise)
], CandidatoResolver.prototype, "createActiveCandidato", null);
__decorate([
    (0, graphql_1.Query)(() => [candidato_entity_1.Candidato], { name: 'candidatosByCodigo' }),
    __param(0, (0, graphql_1.Args)('codigo', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatoResolver.prototype, "findByCodigo", null);
__decorate([
    (0, graphql_1.Mutation)(() => candidato_entity_1.Candidato),
    __param(0, (0, graphql_1.Args)('updateCandidatoDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_candidato_dto_1.UpdateCandidatoDto]),
    __metadata("design:returntype", Promise)
], CandidatoResolver.prototype, "updateCandidato", null);
__decorate([
    (0, graphql_1.Query)(() => [candidato_entity_1.Candidato], { name: 'candidatos' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => candidato_entity_1.Candidato, { name: 'candidato' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidatoResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidatoResolver.prototype, "removeCandidato", null);
__decorate([
    (0, graphql_1.Query)(() => [candidato_entity_1.Candidato], { name: 'candidatosByNumeroDePersonasQueVotaron' }),
    __param(0, (0, graphql_1.Args)('minNumeroDePersonasQueVotaron', { type: () => Number })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidatoResolver.prototype, "findByNumeroDePersonasQueVotaron", null);
exports.CandidatoResolver = CandidatoResolver = __decorate([
    (0, graphql_1.Resolver)(() => candidato_entity_1.Candidato),
    __metadata("design:paramtypes", [candidato_service_1.CandidatoService])
], CandidatoResolver);
//# sourceMappingURL=candidato.resolver.js.map