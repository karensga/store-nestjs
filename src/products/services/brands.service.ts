import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { GenericService } from 'src/common/GenericService.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService extends GenericService<
  Brand,
  number,
  CreateBrandDto,
  UpdateBrandDto
> {
  constructor(
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
  ) {
    super(brandRepository);
  }
}
