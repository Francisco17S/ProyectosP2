export class UpdatePrestamoDto {
    constructor(
      public readonly id: number,
      public readonly fecha?: Date,
      public readonly hora?: string,
      public readonly numeroHorasPrestamo?: number,
      public readonly computadoraId?: number,
      public readonly prestamistaId?: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, UpdatePrestamoDto?] {
      const { id, fecha, hora, numeroHorasPrestamo, computadoraId, prestamistaId } = props;
  
      if (!id || isNaN(Number(id))) return ['Id must be a valid number'];
  
      let fechaDate;
      if (fecha) {
        fechaDate = new Date(fecha);
        if (isNaN(fechaDate.getTime())) return ['Fecha must be a valid date'];
      }
  
      return [undefined, new UpdatePrestamoDto(id, fechaDate, hora, numeroHorasPrestamo, computadoraId, prestamistaId)];
    }
  
    get values() {
      const returnObj: { [key: string]: any } = {};
      if (this.fecha) returnObj.fecha = this.fecha;
      if (this.hora) returnObj.hora = this.hora;
      if (this.numeroHorasPrestamo !== undefined) returnObj.numeroHorasPrestamo = this.numeroHorasPrestamo;
      if (this.computadoraId !== undefined) returnObj.computadoraId = this.computadoraId;
      if (this.prestamistaId !== undefined) returnObj.prestamistaId = this.prestamistaId;
      return returnObj;
    }
  }