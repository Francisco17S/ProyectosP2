import { Router } from 'express';
import { ComputadoraRoutes } from './Computadora/Routes';
import { PrestamistaRoutes } from './Prestamista/Routes';
import { PrestamoRoutes } from './Prestamo/Routes';
import { GitHubRoutes } from './github/github.routes'; // Nueva ruta para GitHub

const router = Router();

router.use('/Computadora', ComputadoraRoutes.routes);
router.use('/Prestamista', PrestamistaRoutes.routes);
router.use('/Prestamo', PrestamoRoutes.routes);
router.use('/github', GitHubRoutes.routes); // Ruta para GitHub

export const AppRoutes = { routes: router }; // Exporta las rutas de manera correcta
