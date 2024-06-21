import { Test, TestingModule } from '@nestjs/testing';
import { ComputadoraController } from './computadora.controller';
import { ComputadoraService } from './computadora.service';

describe('ComputadoraController', () => {
  let controller: ComputadoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputadoraController],
      providers: [ComputadoraService],
    }).compile();

    controller = module.get<ComputadoraController>(ComputadoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
