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
    
    return 'This action adds a new brand';
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
    return `This action updates a #${id} brand`;
  }

  remove(id: string) {
    const aux = this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
    return aux;
  }
}
