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
exports.Prestamista = void 0;
const typeorm_1 = require("typeorm");
const prestamo_entity_1 = require("../../prestamo/entities/prestamo.entity");
let Prestamista = class Prestamista {
};
exports.Prestamista = Prestamista;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Prestamista.prototype, "idprestamista", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prestamista.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prestamista.prototype, "identificacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prestamista.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prestamo_entity_1.Prestamo, (prestamo) => prestamo.prestamista),
    __metadata("design:type", Array)
], Prestamista.prototype, "prestamos", void 0);
exports.Prestamista = Prestamista = __decorate([
    (0, typeorm_1.Entity)('prestamista')
], Prestamista);
//# sourceMappingURL=prestamista.entity.js.map