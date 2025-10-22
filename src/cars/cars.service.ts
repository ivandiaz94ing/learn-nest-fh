import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    // constructor(){
    //    console.log(uuidv4());
    // } 
    private cars : Car[] = [
        {
            id: uuidv4(),
            marca: "Toyota",
            modelo: "Corolla"
        },
        {
            id: uuidv4(),
            marca: "Honda",
            modelo: "Civic"
        },
        {
            id: uuidv4(),
            marca: "Jeep",
            modelo: "Cherokee"
        },
        {
            id: uuidv4(),
            marca: "Mazda",
            modelo: "Alegro"
        },
        
    ]

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find(car => car.id === id);
        if(!car) {
            throw new NotFoundException(`Not exit car with id ${id} in the BD`);
        }
        return car;
    } 

    create(createCarDto: CreateCarDto){
        const newCar : Car = {
            id: uuidv4(),
            ...createCarDto
        }

        this.cars.push(newCar);

    }

    update(updateCarDto: UpdateCarDto){
        
        return updateCarDto;

    }
}
