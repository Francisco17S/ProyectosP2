export class GetAllPrestamistaDto {

    private constructor(
        public readonly id?: number,
        public readonly nombre?: string,
        public readonly identificacion?: string
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.id !== undefined) returnObj.id = this.id;
        if (this.nombre) returnObj.nombre = this.nombre;
        if (this.identificacion) returnObj.identificacion = this.identificacion;

        return returnObj;
    }

    static query(props: { [key: string]: any }): GetAllPrestamistaDto {
        const { id, nombre, identificacion } = props;

        return new GetAllPrestamistaDto(id, nombre, identificacion);
    }
}
