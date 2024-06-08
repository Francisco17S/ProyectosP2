import { Router} from 'express';
import {getAllTablas} from '../controllers/cocineroController';

const router = Router();

router.get('/', getAllTablas);


export default router;