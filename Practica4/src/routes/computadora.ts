import express, { Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const computadoras = await prisma.computadora.findMany();
  res.json(computadoras);
});

router.post('/', async (req: Request, res: Response) => {
  const newComputadora = await prisma.computadora.create({
    data: req.body,
  });
  res.status(201).json(newComputadora);
});

router.get('/:id', async (req: Request, res: Response) => {
  const computadora = await prisma.computadora.findUnique({
    where: { ID: parseInt(req.params.id) },
  });
  if (computadora) {
    res.json(computadora);
  } else {
    res.status(404).send('Computadora no encontrada');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const updatedComputadora = await prisma.computadora.update({
    where: { ID: parseInt(req.params.id) },
    data: req.body,
  });
  res.json(updatedComputadora);
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.computadora.delete({
      where: { ID: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la computadora' });
  }
});

export default router;
