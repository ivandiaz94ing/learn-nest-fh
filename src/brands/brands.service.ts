import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class BrandsService {

  private brands: Brand [] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: Date.now(),
    },

    {
      id: uuid(),
      name: 'Honda',  
      createdAt: Date.now(),
    },
  ];


  create(createBrandDto: CreateBrandDto) {
    const newBrand : Brand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: Date.now(),
    }
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`No se encontra brand con el id ${id}`);
    }
    return brand;
  }


  update(id: string, updateBrandDto: UpdateBrandDto) {
      let brandDB = this.findOne(id);

      this.brands = this.brands.map(brand => {
        if (brand.id === id) {
          brandDB = {
            ...brandDB,
            ...updateBrandDto,
            updatedAt: Date.now(),
          }
          console.log(brandDB);
          return brandDB;
        }        
        return brand;
      });
      return brandDB;
  }

  remove(id: string) {
    const aux = this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
    return aux;
  }
}
