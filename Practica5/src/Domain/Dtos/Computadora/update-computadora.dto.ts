export class UpdateComputadoraDto {

    private constructor(
        public readonly id: number,
        public readonly descripcion?: string,
        public readonly detallesTecnicos?: string,
        public readonly costoPorHoraPrestamo?: number
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.descripcion) returnObj.descripcion = this.descripcion;
        if (this.detallesTecnicos) returnObj.detallesTecnicos = this.detallesTecnicos;
        if (this.costoPorHoraPrestamo !== undefined) returnObj.costoPorHoraPrestamo = this.costoPorHoraPrestamo;

        return returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdateComputadoraDto?] {
        const { id, descripcion, detallesTecnicos, costoPorHoraPrestamo } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        if (costoPorHoraPrestamo !== undefined && (typeof costoPorHoraPrestamo !== 'number' || costoPorHoraPrestamo <= 0)) {
            return ['costoPorHoraPrestamo must be a positive number', undefined];
        }

        return [undefined, new UpdateComputadoraDto(id, descripcion, detallesTecnicos, costoPorHoraPrestamo)];
    }
}
