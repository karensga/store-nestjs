import { BasicEntity } from './../../base.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

import { Product } from './product.entity';

@Entity()
export class Brand extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar' })
  image: string;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
