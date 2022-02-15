import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

export abstract class GenericService<ENTITY, ID, DTO, PARTIAL_DTO> {
  private readonly genericRepository: Repository<ENTITY>;
  constructor(genericRepository: Repository<ENTITY>) {
    this.genericRepository = genericRepository;
  }

  async create(data: DTO): Promise<ENTITY> {
    const newItem = this.genericRepository.create(data);
    await this.genericRepository.save(newItem);
    return newItem;
  }

  async update(id: ID, data: PARTIAL_DTO): Promise<ENTITY> {
    const product = await this.genericRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return this.genericRepository.merge(product, data);
  }

  async remove(id: ID): Promise<boolean> {
    const foundItem = await this.findOne(id);
    if (!foundItem) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    await this.genericRepository.delete(id);
    return true;
  }

  async findAll(): Promise<ENTITY[]> {
    return this.genericRepository.find();
  }

  async findOne(id: ID): Promise<ENTITY> {
    const product = await this.genericRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }
}
