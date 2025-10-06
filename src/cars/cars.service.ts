import { Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            marca: "Toyota",
            modelo: "Corolla"
        },
        {
            id: 2,
            marca: "Honda",
            modelo: "Civic"
        },
        {
            id: 3,
            marca: "Jeep",
            modelo: "Cherokee"
        },
        {
            id: 4,
            marca: "Mazda",
            modelo: "Alegro"
        },
        
    ]

    findAll(){
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(car => car.id === id);
        if(!car) {
            throw new NotFoundException(`Not exit car with id ${id} in the BD`);
        }
        return car;
    } 
}
