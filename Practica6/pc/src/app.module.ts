import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrestamistaModule } from './prestamista/prestamista.module';
import { ComputadoraModule } from './computadora/computadora.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { Prestamista } from './prestamista/entities/prestamista.entity';
import { Computadora } from './computadora/entities/computadora.entity';
import { Prestamo } from './prestamo/entities/prestamo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'adm',
      database: 'prac6',
      entities: [Prestamista, Computadora, Prestamo],
      synchronize: true,
    }),
    
    PrestamistaModule,
    ComputadoraModule,
    PrestamoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
