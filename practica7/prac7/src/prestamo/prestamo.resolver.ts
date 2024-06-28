import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from './entities/prestamo.entity';
import { CreatePrestamoInput } from './dto/create-prestamo.input';
import { UpdatePrestamoInput } from './dto/update-prestamo.input';

@Resolver(() => Prestamo)
export class PrestamoResolver {
  constructor(private readonly prestamoService: PrestamoService) {}

  @Mutation(() => Prestamo)
  async createActivePrestamo(
    @Args('createPrestamoInput') createPrestamoInput: CreatePrestamoInput,
  ): Promise<Prestamo> {
    createPrestamoInput.estado = 'activo';
    return this.prestamoService.create(createPrestamoInput);
  }

  @Mutation(() => Prestamo)
  async createInactivePrestamo(
    @Args('createPrestamoInput') createPrestamoInput: CreatePrestamoInput,
  ): Promise<Prestamo> {
    createPrestamoInput.estado = 'inactivo';
    return this.prestamoService.create(createPrestamoInput);
  }

  @Query(() => [Prestamo], { name: 'prestamos' })
  async findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string): Promise<Prestamo[]> {
    return this.prestamoService.findAll(estado || 'todos');
  }

  @Query(() => Prestamo, { name: 'prestamo' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Prestamo> {
    return this.prestamoService.findOne(id);
  }

  @Mutation(() => Prestamo)
  async updatePrestamo(
    @Args('updatePrestamoInput') updatePrestamoInput: UpdatePrestamoInput,
  ): Promise<Prestamo> {
    return this.prestamoService.update(updatePrestamoInput.idprestamo, updatePrestamoInput);
  }

  @Mutation(() => Prestamo)
  async removePrestamo(@Args('id', { type: () => ID }) id: number): Promise<Prestamo> {
    return this.prestamoService.remove(id);
  }

  @Query(() => [Prestamo], { name: 'prestamosByEstado' })
  async findByEstado(@Args('estado', { type: () => String }) estado: string): Promise<Prestamo[]> {
    return this.prestamoService.findAll(estado);
  }
}
