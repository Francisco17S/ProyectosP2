import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computadora } from './entities/computadora.entity';
import { ComputadoraService } from './computadora.service';
import { ComputadoraResolver } from './computadora.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Computadora])],
  providers: [ComputadoraService,ComputadoraResolver],
  exports: [TypeOrmModule,ComputadoraService], // Asegúrate de exportar TypeOrmModule para que otros módulos puedan usar ComputadoraRepository
})
export class ComputadoraModule {}
