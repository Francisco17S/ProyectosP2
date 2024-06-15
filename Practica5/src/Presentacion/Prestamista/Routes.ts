import { Router } from 'express';
import { PrestamistasController } from '../../Presentacion/Prestamista/Controller';
import { PrestamistaDatasourceImpl } from '../../Infraestructura/DataSource/Prestamista.datasource.impl';
import { PrestamistaRepositoryImpl } from '../../Infraestructura/Repositories/Prestamista.repository.impl';

export class PrestamistaRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PrestamistaDatasourceImpl();
    const prestamistaRepository = new PrestamistaRepositoryImpl(datasource);
    const prestamistaController = new PrestamistasController(prestamistaRepository);

    router.get('/', prestamistaController.getPrestamistas);
    router.get('/:id', prestamistaController.getPrestamistaById);
    router.post('/', prestamistaController.createPrestamista);
    router.put('/:id', prestamistaController.updatePrestamista);
    router.delete('/:id', prestamistaController.deletePrestamista);

    return router;
  }
}
