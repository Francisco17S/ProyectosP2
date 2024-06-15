export class PrestamoEntity {

    constructor(
        public fecha: Date,
        public hora: string,
        public numeroHorasPrestamo: number
    ) {}

    public static fromObject(object: { [key: string]: any }): PrestamoEntity {
        const { fecha, hora, numeroHorasPrestamo } = object;

        if (!fecha) throw 'Fecha is required';
        if (!hora) throw 'Hora is required';
        if (numeroHorasPrestamo === undefined || numeroHorasPrestamo === null) throw 'NumeroHorasPrestamo is required';
        if (typeof numeroHorasPrestamo !== 'number' || numeroHorasPrestamo <= 0) throw 'NumeroHorasPrestamo must be a positive number';

        return new PrestamoEntity(new Date(fecha), hora, numeroHorasPrestamo);
    }
}
