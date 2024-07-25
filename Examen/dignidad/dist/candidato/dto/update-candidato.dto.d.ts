import { CreateCandidatoDto } from './create-candidato.dto';
declare const UpdateCandidatoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCandidatoDto>>;
export declare class UpdateCandidatoDto extends UpdateCandidatoDto_base {
    id: number;
    codigo: string;
    dignidad: string;
    participantes: string;
    tipo_medio: string;
    numero_de_personas_que_votaron: number;
    fecha_de_conteo_de_votos: string;
    empresa: string;
    estado: string;
}
export {};
