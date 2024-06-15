export class PrestamistaEntity {

    constructor(
        public id: number,
        public nombre: string,
        public identificacion: string
    ) {}

    public static fromObject(object: { [key: string]: any }): PrestamistaEntity {
        const { id, nombre, identificacion } = object;

        if (id === undefined || id === null) throw 'ID is required';
        if (!nombre) throw 'Nombre is required';
        if (!identificacion) throw 'Identificacion is required';

        return new PrestamistaEntity(id, nombre, identificacion);
    }
}
