import { Body, Controller, Get, Post } from '@nestjs/common';
import { PartidosService } from './partidos.service';

@Controller('partidos')
export class PartidosController {
    constructor(private readonly partidosService: PartidosService) {}

    @Post()
    async createPartido(@Body() equipoData: any): Promise<String> {
      return this.partidosService.create(equipoData);
    }

    @Get('getTabla')
    async getTabla(): Promise<any> {
      return this.partidosService.generatePositionTabla();
    }
}
