// src/domain/dtos/prestamo/create-prestamo.dto.ts
export class CreatePrestamoDto {
    constructor(
      public readonly fecha: Date,
      public readonly hora: string,
      public readonly numeroHorasPrestamo: number,
      public readonly computadoraId: number,
      public readonly prestamistaId: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreatePrestamoDto?] {
      const { fecha, hora, numeroHorasPrestamo, computadoraId, prestamistaId } = props;
  
      if (!fecha) return ['Fecha is required'];
      if (!hora) return ['Hora is required'];
      if (!numeroHorasPrestamo) return ['NumeroHorasPrestamo is required'];
      if (!computadoraId) return ['ComputadoraId is required'];
      if (!prestamistaId) return ['PrestamistaId is required'];
  
      const fechaDate = new Date(fecha);
      if (isNaN(fechaDate.getTime())) return ['Fecha must be a valid date'];
  
      return [undefined, new CreatePrestamoDto(fechaDate, hora, numeroHorasPrestamo, computadoraId, prestamistaId)];
    }
  }
  
  