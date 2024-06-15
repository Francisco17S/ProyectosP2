import { Router } from 'express';
import { PrestamosController } from '../../Presentacion/Prestamo/Controllers';
import { PrestamoDatasourceImpl } from '../../Infraestructura/DataSource/Prestamo.datasource.impl';
import { PrestamoRepositoryImpl } from '../../Infraestructura/Repositories/Prestamo.repository.impl';

export class PrestamoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PrestamoDatasourceImpl();
    const prestamoRepository = new PrestamoRepositoryImpl(datasource);
    const prestamoController = new PrestamosController(prestamoRepository);

    router.get('/', prestamoController.getPrestamos);
    router.get('/:id', prestamoController.getPrestamoById);
    router.post('/', prestamoController.createPrestamo);
    router.put('/:id', prestamoController.updatePrestamo);
    router.delete('/:id', prestamoController.deletePrestamo);

    return router;
  }
}
