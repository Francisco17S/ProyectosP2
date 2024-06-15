import { prisma } from '../../Data-posgrest';
import { Request, Response } from 'express';
import { CreatePrestamistaDto } from '../../Domain/Dtos/Prestamista/create-prestamista.dto';
import { UpdatePrestamistaDto } from '../../Domain/Dtos/Prestamista/update-prestamista.dto';
import { PrestamistaRepository } from '../../Domain/Repositories/Prestamista.repository';

export class PrestamistasController {

  constructor(private readonly prestamistaRepository: PrestamistaRepository) { }

  public getPrestamistas = async (req: Request, res: Response) => {
    try {
      const prestamistas = await this.prestamistaRepository.getAll();
      return res.status(200).json(prestamistas);
    } catch (error: any) {
      console.error('Error in getPrestamistas:', error);
      res.status(500).json({ message: 'Error al obtener los prestamistas', error: error.message });
    }
  };

  public getPrestamistaById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const prestamista = await this.prestamistaRepository.findById(id);
      if (!prestamista) {
        return res.status(404).json({ message: `Prestamista con id ${id} no encontrado` });
      }
      return res.json(prestamista);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el prestamista', error: error.message });
    }
  };

  public createPrestamista = async (req: Request, res: Response) => {
    try {
      const [error, createPrestamistaDto] = CreatePrestamistaDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const prestamista = await this.prestamistaRepository.create(createPrestamistaDto!);
      return res.json(prestamista);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el prestamista', error: error.message });
    }
  };

  public updatePrestamista = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updatePrestamistaDto] = UpdatePrestamistaDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const prestamista = await this.prestamistaRepository.updateById(updatePrestamistaDto!);
      return res.json(prestamista);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el prestamista', error: error.message });
    }
  };

  public deletePrestamista = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.prestamistaRepository.deleteById(id);
      return res.json({ message: 'Prestamista eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el prestamista', error: error.message });
    }
  };
}
