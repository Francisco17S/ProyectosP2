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
exports.PrestamistaController = void 0;
const common_1 = require("@nestjs/common");
const prestamista_service_1 = require("./prestamista.service");
const create_prestamista_dto_1 = require("./dto/create-prestamista.dto");
const update_prestamista_dto_1 = require("./dto/update-prestamista.dto");
let PrestamistaController = class PrestamistaController {
    constructor(prestamistaService) {
        this.prestamistaService = prestamistaService;
    }
    create(createPrestamistaDto) {
        return this.prestamistaService.create(createPrestamistaDto);
    }
    findAll() {
        return this.prestamistaService.findAll();
    }
    findOne(id) {
        return this.prestamistaService.findOne(id);
    }
    update(id, updatePrestamistaDto) {
        return this.prestamistaService.update(id, updatePrestamistaDto);
    }
    remove(id) {
        return this.prestamistaService.remove(id);
    }
};
exports.PrestamistaController = PrestamistaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestamista_dto_1.CreatePrestamistaDto]),
    __metadata("design:returntype", void 0)
], PrestamistaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrestamistaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrestamistaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_prestamista_dto_1.UpdatePrestamistaDto]),
    __metadata("design:returntype", void 0)
], PrestamistaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrestamistaController.prototype, "remove", null);
exports.PrestamistaController = PrestamistaController = __decorate([
    (0, common_1.Controller)('prestamista'),
    __metadata("design:paramtypes", [prestamista_service_1.PrestamistaService])
], PrestamistaController);
//# sourceMappingURL=prestamista.controller.js.map