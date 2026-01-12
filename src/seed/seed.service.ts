import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CAR_SEED } from './data/car.seed';
import { BrandsService } from '../brands/brands.service';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  
  populateDB() {
    //CAR_SEED;
    // BRAND_SEED
    this.carsService.cargarSemillaCarro(CAR_SEED);
    this.brandsService.cargarSemillaMarcas(BRAND_SEED);

    
    return 'Seed executed';
  }
}
