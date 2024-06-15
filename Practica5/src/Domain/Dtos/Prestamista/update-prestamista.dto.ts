export class UpdatePrestamistaDto {

    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
        public readonly identificacion?: string
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.nombre) returnObj.nombre = this.nombre;
        if (this.identificacion) returnObj.identificacion = this.identificacion;

        return returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdatePrestamistaDto?] {
        const { id, nombre, identificacion } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        return [undefined, new UpdatePrestamistaDto(id, nombre, identificacion)];
    }
}
