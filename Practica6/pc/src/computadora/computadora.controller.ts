import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComputadoraService } from './computadora.service';
import { CreateComputadoraDto } from './dto/create-computadora.dto';
import { UpdateComputadoraDto } from './dto/update-computadora.dto';

@Controller('computadora')
export class ComputadoraController {
  constructor(private readonly computadoraService: ComputadoraService) {}

  @Post()
  create(@Body() createComputadoraDto: CreateComputadoraDto) {
    return this.computadoraService.create(createComputadoraDto);
  }

  @Get()
  findAll() {
    return this.computadoraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.computadoraService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateComputadoraDto: UpdateComputadoraDto) {
    return this.computadoraService.update(id, updateComputadoraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const computadora = await this.computadoraService.remove(id);
    return computadora;
  }
}