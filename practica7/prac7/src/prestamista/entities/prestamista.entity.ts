import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Prestamo } from '../../prestamo/entities/prestamo.entity';

@ObjectType()
@Entity('prestamista')
export class Prestamista {

  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  idprestamista: number;

  @Column()
  @Field()
  nombre: string;

  @Column()
  @Field()
  identificacion: string;

  @Column()
  @Field()
  estado: string;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.prestamista)
  @Field(() => [Prestamo])
  prestamos: Prestamo[];
  
}
