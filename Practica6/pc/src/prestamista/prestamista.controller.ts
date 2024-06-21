import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamistaService } from './prestamista.service';
import { CreatePrestamistaDto } from './dto/create-prestamista.dto';
import { UpdatePrestamistaDto } from './dto/update-prestamista.dto';

@Controller('prestamista')
export class PrestamistaController {
  constructor(private readonly prestamistaService: PrestamistaService) {}

  @Post()
  create(@Body() createPrestamistaDto: CreatePrestamistaDto) {
    return this.prestamistaService.create(createPrestamistaDto);
  }

  @Get()
  findAll() {
    return this.prestamistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prestamistaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePrestamistaDto: UpdatePrestamistaDto) {
    return this.prestamistaService.update(id, updatePrestamistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prestamistaService.remove(id);
  }
}
