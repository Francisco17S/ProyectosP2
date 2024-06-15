export class DeletePrestamoDto {

    private constructor(
        public readonly id: number
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};
        returnObj.id = this.id;
        return returnObj;
    }

    static delete(props: { [key: string]: any }): [string?, DeletePrestamoDto?] {
        const { id } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        return [undefined, new DeletePrestamoDto(id)];
    }
}
