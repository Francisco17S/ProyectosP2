import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Prestamo } from '../../prestamo/entities/prestamo.entity';

@Entity('prestamista')
export class Prestamista {
  @PrimaryGeneratedColumn('increment')
  idprestamista: number;

  @Column()
  nombre: string;

  @Column()
  identificacion: string;

  @Column()
  estado: string; 

  @OneToMany(() => Prestamo, (prestamo) => prestamo.prestamista)
  prestamos: Prestamo[];
}
