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
exports.CandidatoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const candidato_entity_1 = require("./entities/candidato.entity");
let CandidatoService = class CandidatoService {
    constructor(candidatoRepository) {
        this.candidatoRepository = candidatoRepository;
    }
    create(createCandidatoDto) {
        const candidato = this.candidatoRepository.create(createCandidatoDto);
        return this.candidatoRepository.save(candidato);
    }
    findAll(estado = 'todos') {
        const whereCondition = estado === 'todos' ? {} : { estado };
        return this.candidatoRepository.find({ where: whereCondition });
    }
    findOne(id) {
        return this.candidatoRepository.findOne({ where: { id } });
    }
    async findByCodigo(codigo) {
        return this.candidatoRepository.find({
            where: { codigo },
        });
    }
    async update(id, updateCandidatoDto) {
        await this.candidatoRepository.update(id, updateCandidatoDto);
        return this.candidatoRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.candidatoRepository.delete(id);
    }
    async findByNumeroDePersonasQueVotaron(minNumeroDePersonasQueVotaron) {
        return this.candidatoRepository.find({
            where: {
                numero_de_personas_que_votaron: (0, typeorm_2.MoreThan)(minNumeroDePersonasQueVotaron),
            },
        });
    }
};
exports.CandidatoService = CandidatoService;
exports.CandidatoService = CandidatoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(candidato_entity_1.Candidato)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CandidatoService);
//# sourceMappingURL=candidato.service.js.map