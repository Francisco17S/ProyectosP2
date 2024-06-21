import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computadora } from './entities/computadora.entity';
import { ComputadoraService } from './computadora.service';
import { ComputadoraController } from './computadora.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Computadora])],
  controllers: [ComputadoraController],
  providers: [ComputadoraService],
})
export class ComputadoraModule {}
