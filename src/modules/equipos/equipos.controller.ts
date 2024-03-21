import { Body, Controller, Post } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { Equipo } from './equipos.entity';

@Controller('equipos')
export class EquiposController {
    constructor(private readonly equiposService: EquiposService) {}

    @Post()
    async create(@Body() equipoData: any): Promise<String> {
      return this.equiposService.create(equipoData);
    }
}
