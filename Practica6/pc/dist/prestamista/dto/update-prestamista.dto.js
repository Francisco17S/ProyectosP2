"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePrestamistaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prestamista_dto_1 = require("./create-prestamista.dto");
class UpdatePrestamistaDto extends (0, mapped_types_1.PartialType)(create_prestamista_dto_1.CreatePrestamistaDto) {
}
exports.UpdatePrestamistaDto = UpdatePrestamistaDto;
//# sourceMappingURL=update-prestamista.dto.js.map