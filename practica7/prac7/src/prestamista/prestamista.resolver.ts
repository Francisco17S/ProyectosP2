import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PrestamistaService } from './prestamista.service';
import { Prestamista } from './entities/prestamista.entity';
import { CreatePrestamistaInput } from './dto/create-prestamista.input';
import { UpdatePrestamistaInput } from './dto/update-prestamista.input';

@Resolver(() => Prestamista)
export class PrestamistaResolver {
  constructor(private readonly prestamistaService: PrestamistaService) {}

  @Mutation(() => Prestamista)
  async createActivePrestamista(
    @Args('createPrestamistaInput') createPrestamistaInput: CreatePrestamistaInput,
  ): Promise<Prestamista> {
    createPrestamistaInput.estado = 'activo';
    return this.prestamistaService.create(createPrestamistaInput);
  }

  @Mutation(() => Prestamista)
  async createInactivePrestamista(
    @Args('createPrestamistaInput') createPrestamistaInput: CreatePrestamistaInput,
  ): Promise<Prestamista> {
    createPrestamistaInput.estado = 'inactivo';
    return this.prestamistaService.create(createPrestamistaInput);
  }

  @Query(() => [Prestamista], { name: 'prestamistas' })
  async findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string): Promise<Prestamista[]> {
    return this.prestamistaService.findAll(estado || 'todos');
  }

  @Query(() => Prestamista, { name: 'prestamista' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Prestamista> {
    return this.prestamistaService.findOne(id);
  }

  @Mutation(() => Prestamista)
  async updatePrestamista(
    @Args('updatePrestamistaInput') updatePrestamistaInput: UpdatePrestamistaInput,
  ): Promise<Prestamista> {
    return this.prestamistaService.update(updatePrestamistaInput.idprestamista, updatePrestamistaInput);
  }

  @Mutation(() => Prestamista)
  async removePrestamista(@Args('id', { type: () => ID }) id: number): Promise<Prestamista> {
    return this.prestamistaService.remove(id);
  }

  @Query(() => [Prestamista], { name: 'prestamistasByEstado' })
  async findByEstado(@Args('estado', { type: () => String }) estado: string): Promise<Prestamista[]> {
    return this.prestamistaService.findAll(estado);
  }
}
