import express, { Request, Response } from 'express';
import cors from 'cors';
import cocineroRoutes from './routes/cocineros'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/cocineros',cocineroRoutes);

let computadoras = [
    { ID: 1, estado: "Activo", descripcion: "Computadora 1", detallesTecnicos: "Intel i7, 16GB RAM", costoPorHoraPrestamo: 5.0 },
    { ID: 2, estado: "Inactivo", descripcion: "Computadora 2", detallesTecnicos: "Intel i5, 8GB RAM", costoPorHoraPrestamo: 3.0 },
    // Agrega más computadoras según sea necesario
];

app.get('/api/computadoras', (req: Request, res: Response) => {
    res.json(computadoras);
});



app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
