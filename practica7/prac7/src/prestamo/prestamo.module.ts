// prestamo.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { PrestamoService } from './prestamo.service';
import { PrestamoResolver } from './prestamo.resolver'; // Asegúrate de importar PrestamoResolver
import { Computadora } from '../computadora/entities/computadora.entity';
import { Prestamista } from '../prestamista/entities/prestamista.entity';
import { PrestamistaModule } from '../prestamista/prestamista.module';
import { ComputadoraModule } from '../computadora/computadora.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Prestamo, Computadora, Prestamista]),
    PrestamistaModule,
    ComputadoraModule, 
  ],
  providers: [PrestamoService, PrestamoResolver], 
  exports: [TypeOrmModule, PrestamoService],
})
export class PrestamoModule {}
