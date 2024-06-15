export class GetAllComputadoraDto {

    private constructor(
        public readonly id?: number,
        public readonly descripcion?: string,
        public readonly detallesTecnicos?: string,
        public readonly costoPorHoraPrestamo?: number
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.id !== undefined) returnObj.id = this.id;
        if (this.descripcion) returnObj.descripcion = this.descripcion;
        if (this.detallesTecnicos) returnObj.detallesTecnicos = this.detallesTecnicos;
        if (this.costoPorHoraPrestamo !== undefined) returnObj.costoPorHoraPrestamo = this.costoPorHoraPrestamo;

        return returnObj;
    }

    static query(props: { [key: string]: any }): GetAllComputadoraDto {
        const { id, descripcion, detallesTecnicos, costoPorHoraPrestamo } = props;

        return new GetAllComputadoraDto(id, descripcion, detallesTecnicos, costoPorHoraPrestamo);
    }
}
