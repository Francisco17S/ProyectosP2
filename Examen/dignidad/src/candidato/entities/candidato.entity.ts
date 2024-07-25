import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('candidato')
export class Candidato {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column('text')
  codigo: string;

  @Field()
  @Column('text')
  dignidad: string;

  @Field()
  @Column('text')
  participantes: string;

  @Field()
  @Column('text')
  tipo_medio: string;

  @Field(() => Float)
  @Column('float')
  numero_de_personas_que_votaron: number;

  @Field()
  @Column('text')
  fecha_de_conteo_de_votos: string;

  @Field()
  @Column('text')
  empresa: string;

  @Field()
  @Column('text', { default: 'Activo' })
  estado: string;
}
