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
exports.UpdateCandidatoDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_candidato_dto_1 = require("./create-candidato.dto");
let UpdateCandidatoDto = class UpdateCandidatoDto extends (0, mapped_types_1.PartialType)(create_candidato_dto_1.CreateCandidatoDto) {
};
exports.UpdateCandidatoDto = UpdateCandidatoDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateCandidatoDto.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "codigo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "dignidad", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "participantes", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "tipo_medio", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UpdateCandidatoDto.prototype, "numero_de_personas_que_votaron", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "fecha_de_conteo_de_votos", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "empresa", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "estado", void 0);
exports.UpdateCandidatoDto = UpdateCandidatoDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateCandidatoDto);
//# sourceMappingURL=update-candidato.dto.js.map