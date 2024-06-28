import { Module } from '@nestjs/common';
import { PrestamistaService } from './prestamista.service';
import { PrestamistaResolver } from './prestamista.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamista } from './entities/prestamista.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Prestamista]) ],
  providers: [PrestamistaResolver, PrestamistaService],
  exports: [ TypeOrmModule,PrestamistaService ],

})
export class PrestamistaModule {}
