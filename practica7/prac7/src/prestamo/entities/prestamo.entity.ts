import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Computadora } from '../../computadora/entities/computadora.entity';
import { Prestamista } from '../../prestamista/entities/prestamista.entity';

@ObjectType()
@Entity('prestamo')
export class Prestamo {
  
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  idprestamo: number;

  @ManyToOne(() => Computadora, (computadora) => computadora.prestamos)
  @JoinColumn({ name: 'computadora_idcomputadora' })
  @Field(() => Computadora)
  computadora: Computadora;

  @ManyToOne(() => Prestamista, (prestamista) => prestamista.prestamos)
  @JoinColumn({ name: 'prestamista_idprestamista' })
  @Field(() => Prestamista)
  prestamista: Prestamista;

  @Column('text')
  @Field()
  fecha: string;

  @Column('text')
  @Field()
  hora: string;

  @Column('int')
  @Field(() => Int)
  numeroHorasPrestamo: number;

  @Column('text')
  @Field()
  estado: string;
}
