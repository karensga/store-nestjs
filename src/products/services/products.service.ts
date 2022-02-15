import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { GenericService } from 'src/common/GenericService.service';

@Injectable()
export class ProductsService extends GenericService<Product, number, CreateProductDto, UpdateProductDto> {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {
    super(productRepository);
  }

  /* findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    const product = this.productRepo.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  } */

  /*create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

   update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  } */
}
