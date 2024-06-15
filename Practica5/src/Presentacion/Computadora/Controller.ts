import { Request, Response } from 'express';
import { CreateComputadoraDto } from '../../Domain/Dtos/Computadora/create-computadora.dto';
import { UpdateComputadoraDto } from '../../Domain/Dtos/Computadora/update-computadora.dto';
import { ComputadoraRepository } from '../../Domain/Repositories/Computadora.respository';

export class ComputadoraController {

  constructor(private readonly computadoraRepository: ComputadoraRepository) { }

  public getComputadoras = async (req: Request, res: Response) => {
    try {
      const computadoras = await this.computadoraRepository.getAll();
      return res.status(200).json(computadoras);
    } catch (error: any) {
      console.error('Error in getComputadoras:', error);
      res.status(500).json({ message: 'Error al obtener las computadoras', error: error.message });
    }
  };

  public getComputadoraById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const computadora = await this.computadoraRepository.findById(id);
      if (!computadora) {
        return res.status(404).json({ message: `Computadora con id ${id} no encontrada` });
      }
      return res.json(computadora);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener la computadora', error: error.message });
    }
  };

  public createComputadora = async (req: Request, res: Response) => {
    try {
      const [error, createComputadoraDto] = CreateComputadoraDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const computadora = await this.computadoraRepository.create(createComputadoraDto!);
      return res.json(computadora);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear la computadora', error: error.message });
    }
  };

  public updateComputadora = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updateComputadoraDto] = UpdateComputadoraDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const computadora = await this.computadoraRepository.updateById(updateComputadoraDto!);
      return res.json(computadora);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar la computadora', error: error.message });
    }
  };

  public deleteComputadora = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.computadoraRepository.deleteById(id);
      return res.json({ message: 'Computadora eliminada correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar la computadora', error: error.message });
    }
  };
}
