import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatoService } from './candidato.service';
import { CandidatoController } from './candidato.controller';
import { Candidato } from './entities/candidato.entity';
import { CandidatoResolver } from './candidato.resolver';
import { CandidatoGateway } from './candidato.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato])],
  controllers: [CandidatoController],
  providers: [CandidatoService, CandidatoResolver, CandidatoGateway],
})
export class CandidatoModule {}
