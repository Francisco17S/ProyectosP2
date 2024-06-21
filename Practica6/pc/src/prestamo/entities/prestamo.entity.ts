import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Computadora } from '../../computadora/entities/computadora.entity';
import { Prestamista } from '../../prestamista/entities/prestamista.entity';

@Entity('prestamo')
export class Prestamo {
  @PrimaryGeneratedColumn('increment')
  idprestamo: number;

  @ManyToOne(() => Computadora, (computadora) => computadora.prestamos)
  @JoinColumn({ name: 'computadora_idcomputadora' })
  computadora: Computadora;

  @ManyToOne(() => Prestamista, (prestamista) => prestamista.prestamos)
  @JoinColumn({ name: 'prestamista_idprestamista' })
  prestamista: Prestamista;

  @Column('text')
  fecha: string;

  @Column('text')
  hora: string;

  @Column('int')
  numeroHorasPrestamo: number;

  @Column('text')
  estado: string;
}
