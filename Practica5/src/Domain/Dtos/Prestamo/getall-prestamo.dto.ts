export class GetAllPrestamoDto {

    private constructor(
        public readonly fecha?: Date,
        public readonly hora?: string,
        public readonly numeroHorasPrestamo?: number
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.fecha) returnObj.fecha = this.fecha;
        if (this.hora) returnObj.hora = this.hora;
        if (this.numeroHorasPrestamo !== undefined) returnObj.numeroHorasPrestamo = this.numeroHorasPrestamo;

        return returnObj;
    }

    static query(props: { [key: string]: any }): GetAllPrestamoDto {
        const { fecha, hora, numeroHorasPrestamo } = props;

        return new GetAllPrestamoDto(fecha ? new Date(fecha) : undefined, hora, numeroHorasPrestamo);
    }
}
