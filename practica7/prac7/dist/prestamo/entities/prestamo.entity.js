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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestamo = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const computadora_entity_1 = require("../../computadora/entities/computadora.entity");
const prestamista_entity_1 = require("../../prestamista/entities/prestamista.entity");
let Prestamo = class Prestamo {
};
exports.Prestamo = Prestamo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Prestamo.prototype, "idprestamo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => computadora_entity_1.Computadora, (computadora) => computadora.prestamos),
    (0, typeorm_1.JoinColumn)({ name: 'computadora_idcomputadora' }),
    (0, graphql_1.Field)(() => computadora_entity_1.Computadora),
    __metadata("design:type", computadora_entity_1.Computadora)
], Prestamo.prototype, "computadora", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prestamista_entity_1.Prestamista, (prestamista) => prestamista.prestamos),
    (0, typeorm_1.JoinColumn)({ name: 'prestamista_idprestamista' }),
    (0, graphql_1.Field)(() => prestamista_entity_1.Prestamista),
    __metadata("design:type", prestamista_entity_1.Prestamista)
], Prestamo.prototype, "prestamista", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Prestamo.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Prestamo.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Prestamo.prototype, "numeroHorasPrestamo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Prestamo.prototype, "estado", void 0);
exports.Prestamo = Prestamo = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('prestamo')
], Prestamo);
//# sourceMappingURL=prestamo.entity.js.map