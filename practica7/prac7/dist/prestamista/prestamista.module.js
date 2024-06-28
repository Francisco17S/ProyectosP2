"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestamistaModule = void 0;
const common_1 = require("@nestjs/common");
const prestamista_service_1 = require("./prestamista.service");
const prestamista_resolver_1 = require("./prestamista.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const prestamista_entity_1 = require("./entities/prestamista.entity");
let PrestamistaModule = class PrestamistaModule {
};
exports.PrestamistaModule = PrestamistaModule;
exports.PrestamistaModule = PrestamistaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prestamista_entity_1.Prestamista])],
        providers: [prestamista_resolver_1.PrestamistaResolver, prestamista_service_1.PrestamistaService],
        exports: [typeorm_1.TypeOrmModule, prestamista_service_1.PrestamistaService],
    })
], PrestamistaModule);
//# sourceMappingURL=prestamista.module.js.map