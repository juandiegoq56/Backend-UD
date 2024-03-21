import { Entity, PrimaryGeneratedColumn, Column, IntegerType } from 'typeorm';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  pais: string;

  @Column()
  fundacion:number;

}