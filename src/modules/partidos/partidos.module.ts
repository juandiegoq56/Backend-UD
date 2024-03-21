import { Module, Logger } from '@nestjs/common';
import { PartidosController } from './partidos.controller';
import { PartidosService } from './partidos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partidos } from './partidos.entity';
import { Equipo } from '../equipos/equipos.entity';
import { EquiposService } from '../equipos/equipos.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Partidos,Equipo])
  ],
  controllers: [PartidosController],
  providers: [PartidosService,EquiposService,Logger]
})
export class PartidosModule {}
