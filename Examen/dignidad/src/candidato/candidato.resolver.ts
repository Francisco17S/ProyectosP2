import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CandidatoService } from './candidato.service';
import { Candidato } from './entities/candidato.entity';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';

@Resolver(() => Candidato)
export class CandidatoResolver {
  constructor(private readonly candidatoService: CandidatoService) {}

  @Mutation(() => Candidato)
  async createActiveCandidato(
    @Args('createCandidatoDto') createCandidatoDto: CreateCandidatoDto,
  ): Promise<Candidato> {
    createCandidatoDto.estado = 'Activo';
    return this.candidatoService.create(createCandidatoDto);
  }
  
  @Query(() => [Candidato], { name: 'candidatosByCodigo' })
async findByCodigo(
  @Args('codigo', { type: () => String }) codigo: string,
): Promise<Candidato[]> {
  return this.candidatoService.findByCodigo(codigo);
}


  @Mutation(() => Candidato)
  async updateCandidato(
    @Args('updateCandidatoDto') updateCandidatoDto: UpdateCandidatoDto,
  ): Promise<Candidato> {
    return this.candidatoService.update(updateCandidatoDto.id, updateCandidatoDto);
  }

  @Query(() => [Candidato], { name: 'candidatos' })
  async findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string): Promise<Candidato[]> {
    return this.candidatoService.findAll(estado || 'todos');
  }

  @Query(() => Candidato, { name: 'candidato' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Candidato> {
    return this.candidatoService.findOne(id);
  }

  @Mutation(() => Boolean)
  async removeCandidato(@Args('id', { type: () => ID }) id: number): Promise<boolean> {
    await this.candidatoService.remove(id);
    return true;
  }

  @Query(() => [Candidato], { name: 'candidatosByNumeroDePersonasQueVotaron' })
  async findByNumeroDePersonasQueVotaron(@Args('minNumeroDePersonasQueVotaron', { type: () => Number }) minNumeroDePersonasQueVotaron: number): Promise<Candidato[]> {
    return this.candidatoService.findByNumeroDePersonasQueVotaron(minNumeroDePersonasQueVotaron);
  }
}
