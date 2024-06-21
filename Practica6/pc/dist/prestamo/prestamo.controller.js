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
exports.PrestamoController = void 0;
const common_1 = require("@nestjs/common");
const prestamo_service_1 = require("./prestamo.service");
const create_prestamo_dto_1 = require("./dto/create-prestamo.dto");
const update_prestamo_dto_1 = require("./dto/update-prestamo.dto");
let PrestamoController = class PrestamoController {
    constructor(prestamoService) {
        this.prestamoService = prestamoService;
    }
    create(createPrestamoDto) {
        return this.prestamoService.create(createPrestamoDto);
    }
    findAll() {
        return this.prestamoService.findAll();
    }
    findOne(id) {
        return this.prestamoService.findOne(id);
    }
    update(id, updatePrestamoDto) {
        return this.prestamoService.update(id, updatePrestamoDto);
    }
    remove(id) {
        return this.prestamoService.remove(id);
    }
};
exports.PrestamoController = PrestamoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestamo_dto_1.CreatePrestamoDto]),
    __metadata("design:returntype", void 0)
], PrestamoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrestamoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrestamoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_prestamo_dto_1.UpdatePrestamoDto]),
    __metadata("design:returntype", void 0)
], PrestamoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrestamoController.prototype, "remove", null);
exports.PrestamoController = PrestamoController = __decorate([
    (0, common_1.Controller)('prestamo'),
    __metadata("design:paramtypes", [prestamo_service_1.PrestamoService])
], PrestamoController);
//# sourceMappingURL=prestamo.controller.js.map