import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateCategoryDto } from '../dtos/category.dto';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getProducts() {
    return this.categoriesService.findAll();
  }

  @Get(':categoryId')
  getOne(@Param('categoryId', ParseIntPipe) categoryId: string) {
    return this.categoriesService.findOne(+categoryId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCategoryDto) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriesService.remove(id);
  }
}
