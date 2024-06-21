import { Test, TestingModule } from '@nestjs/testing';
import { PrestamistaController } from './prestamista.controller';
import { PrestamistaService } from './prestamista.service';

describe('PrestamistaController', () => {
  let controller: PrestamistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestamistaController],
      providers: [PrestamistaService],
    }).compile();

    controller = module.get<PrestamistaController>(PrestamistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
