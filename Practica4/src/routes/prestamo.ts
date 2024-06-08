import express, { Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const prestamos = await prisma.prestamo.findMany();
  res.json(prestamos);
});

router.post('/', async (req: Request, res: Response) => {
  const newPrestamo = await prisma.prestamo.create({
    data: req.body,
  });
  res.status(201).json(newPrestamo);
});

router.get('/:id', async (req: Request, res: Response) => {
  const prestamo = await prisma.prestamo.findUnique({
    where: { ID: parseInt(req.params.id) },
  });
  if (prestamo) {
    res.json(prestamo);
  } else {
    res.status(404).send('Prestamo no encontrado');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPrestamo = await prisma.prestamo.update({
      where: { ID: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedPrestamo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el prestamo' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.prestamo.delete({
      where: { ID: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el prestamo' });
  }
});

export default router;
