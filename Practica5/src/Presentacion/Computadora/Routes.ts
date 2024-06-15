import { Router } from 'express';
import { ComputadoraController } from '../../Presentacion/Computadora/Controller';
import { ComputadoraDatasourceImpl } from '../../Infraestructura/DataSource/Computadora.datasource.impl';
import { ComputadoraRepositoryImpl } from '../../Infraestructura/Repositories/Computadora.respository.impl';

export class ComputadoraRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new ComputadoraDatasourceImpl();
    const computadoraRepository = new ComputadoraRepositoryImpl(datasource);
    const computadoraController = new ComputadoraController(computadoraRepository);

    router.get('/', computadoraController.getComputadoras);
    router.get('/:id', computadoraController.getComputadoraById);
    router.post('/', computadoraController.createComputadora);
    router.put('/:id', computadoraController.updateComputadora);
    router.delete('/:id', computadoraController.deleteComputadora);

    return router;
  }
}
