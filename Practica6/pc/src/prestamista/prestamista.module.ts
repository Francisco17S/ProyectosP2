import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestamistaService } from './prestamista.service';
import { PrestamistaController } from './prestamista.controller';
import { Prestamista } from './entities/prestamista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamista])],
  controllers: [PrestamistaController],
  providers: [PrestamistaService],
  exports: [TypeOrmModule]  // Asegúrate de exportar TypeOrmModule si este módulo es usado en otros módulos
})
export class PrestamistaModule {}
