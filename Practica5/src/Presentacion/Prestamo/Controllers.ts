import { Request, Response } from 'express';
import { CreatePrestamoDto } from '../../Domain/Dtos/Prestamo/create-prestamo.dto'
import { UpdatePrestamoDto } from '../../Domain/Dtos/Prestamo/update-prestamo.dto'
import { PrestamoRepository } from '../../Domain/Repositories/Prestamo.repository';

export class PrestamosController {

  constructor(private readonly prestamoRepository: PrestamoRepository) { }

  public getPrestamos = async (req: Request, res: Response) => {
    try {
      const prestamos = await this.prestamoRepository.getAll();
      return res.status(200).json(prestamos);
    } catch (error: any) {
      console.error('Error in getPrestamos:', error);
      res.status(500).json({ message: 'Error al obtener los préstamos', error: error.message });
    }
  };

  public getPrestamoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const prestamo = await this.prestamoRepository.findById(id);
      if (!prestamo) {
        return res.status(404).json({ message: `Préstamo con id ${id} no encontrado` });
      }
      return res.json(prestamo);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el préstamo', error: error.message });
    }
  };

  public createPrestamo = async (req: Request, res: Response) => {
    try {
      const [error, createPrestamoDto] = CreatePrestamoDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const prestamo = await this.prestamoRepository.create(createPrestamoDto!);
      return res.json(prestamo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el préstamo', error: error.message });
    }
  };

  public updatePrestamo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updatePrestamoDto] = UpdatePrestamoDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const prestamo = await this.prestamoRepository.updateById(updatePrestamoDto!);
      return res.json(prestamo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el préstamo', error: error.message });
    }
  };

  public deletePrestamo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.prestamoRepository.deleteById(id);
      return res.json({ message: 'Préstamo eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el préstamo', error: error.message });
    }
  };
}
