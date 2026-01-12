import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    // constructor(){
    //    console.log(uuidv4());
    // } 
    private cars : Car[] = [
        // {
        //     id: uuidv4(),
        //     marca: "Toyota",
        //     modelo: "Corolla"
        // }
        
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
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar);

    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById(id);
        
        this.cars = this.cars.map(car => {
            
            if(car.id===id){
                carDB = {...carDB,  ...updateCarDto, id}
                console.log(carDB);
                return carDB;
            }

            return car;
        })

        return carDB;

    }

    delete(id: string){
       const carDelete = this.findOneById(id);
       if(!carDelete)return
       this.cars = this.cars.filter(car => car.id !== id);

    }

    cargarSemillaCarro(cars: Car[]){
        this.cars = cars;
    }
}
