import { Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Partidos } from './partidos.entity';
import { Repository } from 'typeorm';
import { EquiposService } from '../equipos/equipos.service';
@Injectable()
export class PartidosService {
    constructor(
        @InjectRepository(Partidos)
        private partidoRepository: Repository<Partidos>,
        private equiposService: EquiposService,
        private readonly logger: Logger,
    ){}

    async create(partidoData: any){
        try {
            const localEquipo = await this.equiposService.findEquipo(partidoData.localId);
            const visitanteEquipo = await this.equiposService.findEquipo(partidoData.visitanteId);
            if (!localEquipo || !visitanteEquipo) {
                throw new Error('No se encontraron los equipos');
            }
            if (localEquipo.id == visitanteEquipo.id) {
                return "Un partido se debe jugar con diferentes equipos"
            }

            const nuevoPartido = new Partidos; //Objeto entity Partidos
            nuevoPartido.local = localEquipo;
            nuevoPartido.visitante = visitanteEquipo;
            nuevoPartido.localScore = partidoData.localScore;
            nuevoPartido.foreanScore = partidoData.foreanScore;

            if(nuevoPartido.localScore > nuevoPartido.foreanScore){
                nuevoPartido.winner = localEquipo;
            }else if(nuevoPartido.localScore < nuevoPartido.foreanScore){
                nuevoPartido.winner = visitanteEquipo;
            }else{
                nuevoPartido.winner = null;
            }

            this.partidoRepository.save(nuevoPartido);
            return "Partido correctamente creado"
        } catch (error) {
            return "Msge de error: "+error;
        }
        
    }
    async generatePositionTabla(){
        try {
            const query = `
            SELECT
            e.id AS equipo_id,
            e.nombre AS nombre_equipo,
            COUNT(p.id) AS partidos_jugados,
            SUM(
                CASE
                    WHEN p.winnerId = e.id THEN 3  -- El equipo local ganó
                    WHEN p.winnerId IS NULL THEN 1  -- Empate
                    ELSE 0  -- El equipo local perdió
                END
            ) AS puntuacion,
            SUM(
                CASE
                    WHEN p.localId = e.id THEN p.localScore  -- Goles a favor como local
                    ELSE p.foreanScore  -- Goles a favor como visitante
                END
            ) AS goles_a_favor,
            SUM(
                CASE
                    WHEN p.localId = e.id THEN p.foreanScore  -- Goles en contra como local
                    ELSE p.localScore  -- Goles en contra como visitante
                END
            ) AS goles_en_contra
        FROM
            equipo e
        LEFT JOIN
            partidos p ON e.id = p.localId OR e.id = p.visitanteId
        GROUP BY
            e.id, e.nombre
        ORDER BY
            puntuacion DESC;
            `;
            let tabla = await this.partidoRepository.query(query);
            tabla.forEach(element => {
                element.diferenciaGol = element.goles_a_favor - element.goles_en_contra;
            });
            return tabla;
        } catch (error) {
            return error;
        }

    }
}
