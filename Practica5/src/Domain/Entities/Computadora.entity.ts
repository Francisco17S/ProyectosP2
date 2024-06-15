export class ComputadoraEntity {

    constructor(
        public id: number,
        public descripcion: string,
        public detallesTecnicos: string,
        public costoPorHoraPrestamo: number
    ) {}

    public static fromObject(object: { [key: string]: any }): ComputadoraEntity {
        const { id, descripcion, detallesTecnicos, costoPorHoraPrestamo } = object;

        if (id === undefined || id === null) throw 'ID is required';
        if (!descripcion) throw 'Descripcion is required';
        if (!detallesTecnicos) throw 'DetallesTecnicos is required';
        if (costoPorHoraPrestamo === undefined || costoPorHoraPrestamo === null) throw 'CostoPorHoraPrestamo is required';
        if (typeof costoPorHoraPrestamo !== 'number' || costoPorHoraPrestamo <= 0) throw 'CostoPorHoraPrestamo must be a positive number';

        return new ComputadoraEntity(id, descripcion, detallesTecnicos, costoPorHoraPrestamo);
    }
}
