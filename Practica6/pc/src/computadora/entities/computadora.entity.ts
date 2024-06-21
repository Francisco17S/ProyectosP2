import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Prestamo } from './../../prestamo/entities/prestamo.entity'; 

@Entity('computadora')
export class Computadora {
  @PrimaryGeneratedColumn('increment')
  idcomputadora: number;

  @Column('text')
  descripcion: string;

  @Column('text')
  detallestecnicos: string;

  @Column('float')
  costoporhoraprestamo: number;

  @Column('text', { default: 'text' })
  estado: string;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.computadora)
  prestamos: Prestamo[];
}
