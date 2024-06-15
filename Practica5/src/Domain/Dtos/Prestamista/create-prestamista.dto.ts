export class CreatePrestamistaDto {

    private constructor(
        public readonly nombre: string,
        public readonly identificacion: string
    ) {}

    static create(props: { [key: string]: any }): [string?, CreatePrestamistaDto?] {
        const { nombre, identificacion } = props;

        if (!nombre) return ['Nombre property is required', undefined];
        if (!identificacion) return ['Identificacion property is required', undefined];

        return [undefined, new CreatePrestamistaDto(nombre, identificacion)];
    }
}
