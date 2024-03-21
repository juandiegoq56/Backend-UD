import { Injectable } from '@nestjs/common';
import { Equipo } from './equipos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class EquiposService {
    constructor(
        @InjectRepository(Equipo)
        private equipoRepository: Repository<Equipo>,
    ){}
    async create(equipoData: any){
        try {
            this.equipoRepository.save(equipoData);
            return "Equipo correctamente creado"
        } catch (error) {
            return "Msge de error: "+error;
        }
        
      }

    async findEquipo(id: number){
        const equipo = this.equipoRepository.findOne({ where: { id } });
        if(!equipo){
            return null;
        }else{
            return equipo;
        }
    }
}
