import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: string) {
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(id);
  }
}
