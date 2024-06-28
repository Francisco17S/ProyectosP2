import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ComputadoraService } from './computadora.service';
import { Computadora } from './entities/computadora.entity';
import { CreateComputadoraInput } from './dto/create-computadora.input';
import { UpdateComputadoraInput } from './dto/update-computadora.input';

@Resolver(() => Computadora)
export class ComputadoraResolver {
  constructor(private readonly computadoraService: ComputadoraService) {}

  @Mutation(() => Computadora)
  async createActiveComputadora(
    @Args('createComputadoraInput') createComputadoraInput: CreateComputadoraInput,
  ): Promise<Computadora> {
    createComputadoraInput.estado = 'activo';
    return this.computadoraService.create(createComputadoraInput);
  }

  @Mutation(() => Computadora)
  async createInactiveComputadora(
    @Args('createComputadoraInput') createComputadoraInput: CreateComputadoraInput,
  ): Promise<Computadora> {
    createComputadoraInput.estado = 'inactivo';
    return this.computadoraService.create(createComputadoraInput);
  }

  @Query(() => [Computadora], { name: 'computadoras' })
  async findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string): Promise<Computadora[]> {
    return this.computadoraService.findAll(estado || 'todos');
  }

  @Query(() => Computadora, { name: 'computadora' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Computadora> {
    return this.computadoraService.findOne(id);
  }

  @Mutation(() => Computadora)
  async updateComputadora(
    @Args('updateComputadoraInput') updateComputadoraInput: UpdateComputadoraInput,
  ): Promise<Computadora> {
    return this.computadoraService.update(updateComputadoraInput.idcomputadora, updateComputadoraInput);
  }

  @Mutation(() => Computadora)
  async removeComputadora(@Args('id', { type: () => ID }) id: number): Promise<Computadora> {
    return this.computadoraService.remove(id);
  }

  @Query(() => [Computadora], { name: 'computadorasByEstado' })
  async findByEstado(@Args('estado', { type: () => String }) estado: string): Promise<Computadora[]> {
    return this.computadoraService.findAll(estado);
  }
}
