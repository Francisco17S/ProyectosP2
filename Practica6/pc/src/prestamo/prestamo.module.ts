import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { Prestamo } from './entities/prestamo.entity';
import { Computadora } from '../computadora/entities/computadora.entity';
import { Prestamista } from '../prestamista/entities/prestamista.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Prestamo, Computadora, Prestamista])
  ],
  controllers: [PrestamoController],
  providers: [PrestamoService],
  exports: [TypeOrmModule]
})
export class PrestamoModule {}
