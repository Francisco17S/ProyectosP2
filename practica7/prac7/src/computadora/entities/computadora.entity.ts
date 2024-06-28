import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Prestamo } from './../../prestamo/entities/prestamo.entity'; 

@ObjectType()
@Entity('computadora')
export class Computadora {

  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  idcomputadora: number;

  @Column('text')
  @Field()
  descripcion: string;

  @Column('text')
  @Field()
  detallestecnicos: string;

  @Column('float')
  @Field(() => Float)
  costoporhoraprestamo: number;

  @Column('text', { default: 'text' })
  @Field({ defaultValue: 'text' })
  estado: string;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.computadora)
  @Field(() => [Prestamo])
  prestamos: Prestamo[];
  
}
