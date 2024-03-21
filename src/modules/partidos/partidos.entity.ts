import { Entity, PrimaryGeneratedColumn, Column, IntegerType, ManyToOne } from 'typeorm';
import { Equipo } from '../equipos/equipos.entity';
@Entity()
export class Partidos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipo)
  //@Column()
  local: Equipo;

  @ManyToOne(() => Equipo)
  visitante: Equipo;

  @Column()
  localScore:number;

  @Column()
  foreanScore:number;

  @ManyToOne(() => Equipo, { nullable: true })
  winner:Equipo;

}