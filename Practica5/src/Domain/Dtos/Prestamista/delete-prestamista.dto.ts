export class DeletePrestamistaDto {

    private constructor(
        public readonly id: number
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};
        returnObj.id = this.id;
        return returnObj;
    }

    static delete(props: { [key: string]: any }): [string?, DeletePrestamistaDto?] {
        const { id } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        return [undefined, new DeletePrestamistaDto(id)];
    }
}
