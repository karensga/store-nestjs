import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  ParseIntPipe,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductDto,
} from '../dtos/product.dto';

import { ProductsService } from '../services/products.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Public } from '../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';
import { RolesGuard } from '../../auth/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Public()
  @Get()
  getProducts(@Query() params: FilterProductDto) {
    return this.productsService.findAll(params);
  }

  @Public()
  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: string) {
    return this.productsService.findOne(+productId);
  }

  @Post()
  @Roles(Role.ADMIN)
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Put(':id/category/:categoryId')
  @Roles(Role.ADMIN)
  addCategoryToProduct(
    @Param('id') id: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.addCategoryToProduct(id, categoryId);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  delete(@Param('id') id: number) {
    return this.productsService.remove(id);
  }

  @Delete(':id/category/:categoryId')
  @Roles(Role.ADMIN)
  deleteCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.removeCategoryByProduct(id, categoryId);
  }
}
