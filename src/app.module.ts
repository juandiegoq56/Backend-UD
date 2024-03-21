import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { EquiposModule } from './modules/equipos/equipos.module';
import { PartidosModule } from './modules/partidos/partidos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'Futbol',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EquiposModule,
    PartidosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
