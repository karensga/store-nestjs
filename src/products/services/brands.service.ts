import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private brandsRepository: Repository<Brand>,
  ) {}

  findAll() {
    return this.brandsRepository.find();
  }

  findOne(id: number) {
    const product = this.brandsRepository.findOne(id, {
      relations: ['products'],
    });
    if (!product) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return product;
  }

  create(data: CreateBrandDto) {
    const newBrand = this.brandsRepository.create(data);
    return this.brandsRepository.save(newBrand);
  }

  async update(id: number, changes: UpdateBrandDto) {
    const brand = await this.findOne(id);
    this.brandsRepository.merge(brand, changes);
    return this.brandsRepository.save(brand);
  }

  remove(id: number) {
    return this.brandsRepository.delete(id);
  }
}
