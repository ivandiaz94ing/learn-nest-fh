import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CAR_SEED : Car[] = [
    {
        id: uuid(),
        marca: 'Toyota',
        modelo: 'Corolla'
    },
    {
        id: uuid(),
        marca: 'Honda',
        modelo: 'Civic'
    },
    {
        id: uuid(),
        marca: 'Ford',
        modelo: 'Mustang'
    },
];