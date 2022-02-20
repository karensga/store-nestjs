import { BasicEntity } from '../../base.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';

import { Product } from './product.entity';

@Entity()
export class Category extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
