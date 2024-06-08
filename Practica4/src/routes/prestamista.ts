import express, { Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const prestamistas = await prisma.prestamista.findMany();
  res.json(prestamistas);
});

router.post('/', async (req: Request, res: Response) => {
  const newPrestamista = await prisma.prestamista.create({
    data: req.body,
  });
  res.status(201).json(newPrestamista);
});

router.get('/:id', async (req: Request, res: Response) => {
  const prestamista = await prisma.prestamista.findUnique({
    where: { ID: parseInt(req.params.id) },
  });
  if (prestamista) {
    res.json(prestamista);
  } else {
    res.status(404).send('Prestamista no encontrado');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const updatedPrestamista = await prisma.prestamista.update({
    where: { ID: parseInt(req.params.id) },
    data: req.body,
  });
  res.json(updatedPrestamista);
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.prestamista.delete({
      where: { ID: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el prestamista' });
  }
});

export default router;
