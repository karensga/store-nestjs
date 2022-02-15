import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { GenericService } from 'src/common/GenericService.service';

@Injectable()
export class ProductsService extends GenericService<
  Product,
  number,
  CreateProductDto,
  UpdateProductDto
> {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {
    super(productRepository);
  }
}
