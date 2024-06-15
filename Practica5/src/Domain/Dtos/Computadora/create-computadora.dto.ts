export class CreateComputadoraDto {

    private constructor(
        public readonly descripcion: string,
        public readonly detallesTecnicos: string,
        public readonly costoPorHoraPrestamo: number
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateComputadoraDto?] {
        const { descripcion, detallesTecnicos, costoPorHoraPrestamo } = props;

        if (!descripcion) return ['Descripcion property is required', undefined];
        if (!detallesTecnicos) return ['DetallesTecnicos property is required', undefined];
        if (costoPorHoraPrestamo === undefined || costoPorHoraPrestamo === null) return ['CostoPorHoraPrestamo property is required', undefined];
        if (typeof costoPorHoraPrestamo !== 'number' || costoPorHoraPrestamo <= 0) return ['CostoPorHoraPrestamo must be a positive number', undefined];

        return [undefined, new CreateComputadoraDto(descripcion, detallesTecnicos, costoPorHoraPrestamo)];
    }
}
