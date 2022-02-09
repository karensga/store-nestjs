import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndPoint() {
    return 'yo soy un nuevo';
  }

  @Get('products/:productId')
  getProducts(@Param('productId') params: string) {
    return `product ${params}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product: ${productId} and categories: ${id}`;
  }
}
