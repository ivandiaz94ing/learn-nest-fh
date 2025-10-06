import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
interface Car{
  id: number;
  modelo: string;
  marca: string;
}

@Controller('cars')
export class CarsController {

// inyeccion de dependencia en el metodo constructor
 constructor(private readonly carsService: CarsService){
  
 }
    
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  getCarById(@Param('id', ParseIntPipe) id : number){
    return this.carsService.findOneById(id)
  }

  @Post()
  createCar( @Body() body: Car){
    return body;
  }

  @Patch('/:id')
  updateCar(
    @Param('id', ParseIntPipe) id : number,
    @Body() body: Car){
    return body
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id : number){
    return {
      "car": "delete",
      id
    }
  }
}
