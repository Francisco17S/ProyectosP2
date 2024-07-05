import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoGateway } from './prestamo.gateway';

@Module({
  providers: [PrestamoGateway, PrestamoService],
})
export class PrestamoModule {}
