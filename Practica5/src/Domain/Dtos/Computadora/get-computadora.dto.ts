export class GetComputadoraByIdDto {

    private constructor(
        public readonly id: number
    ) {}

    get values() {
        return { id: this.id };
    }

    static query(props: { [key: string]: any }): [string?, GetComputadoraByIdDto?] {
        const { id } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }

        return [undefined, new GetComputadoraByIdDto(id)];
    }
}
