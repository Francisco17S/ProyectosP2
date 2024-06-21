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
exports.Computadora = void 0;
const typeorm_1 = require("typeorm");
const prestamo_entity_1 = require("./../../prestamo/entities/prestamo.entity");
let Computadora = class Computadora {
};
exports.Computadora = Computadora;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Computadora.prototype, "idcomputadora", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Computadora.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Computadora.prototype, "detallestecnicos", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Computadora.prototype, "costoporhoraprestamo", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: 'text' }),
    __metadata("design:type", String)
], Computadora.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prestamo_entity_1.Prestamo, (prestamo) => prestamo.computadora),
    __metadata("design:type", Array)
], Computadora.prototype, "prestamos", void 0);
exports.Computadora = Computadora = __decorate([
    (0, typeorm_1.Entity)('computadora')
], Computadora);
//# sourceMappingURL=computadora.entity.js.map