import { Test, TestingModule } from '@nestjs/testing';
import { ComputadoraService } from './computadora.service';

describe('ComputadoraService', () => {
  let service: ComputadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComputadoraService],
    }).compile();

    service = module.get<ComputadoraService>(ComputadoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
