"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const candidato_service_1 = require("./candidato.service");
const candidato_controller_1 = require("./candidato.controller");
const candidato_entity_1 = require("./entities/candidato.entity");
const candidato_resolver_1 = require("./candidato.resolver");
const candidato_gateway_1 = require("./candidato.gateway");
let CandidatoModule = class CandidatoModule {
};
exports.CandidatoModule = CandidatoModule;
exports.CandidatoModule = CandidatoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([candidato_entity_1.Candidato])],
        controllers: [candidato_controller_1.CandidatoController],
        providers: [candidato_service_1.CandidatoService, candidato_resolver_1.CandidatoResolver, candidato_gateway_1.CandidatoGateway],
    })
], CandidatoModule);
//# sourceMappingURL=candidato.module.js.map