import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm';

import { BasicEntity } from '../../base.entity';

import { User } from './user.entity';

@Entity()
export class Customer extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  lastname: string;

  @Column({ type: 'varchar' })
  phone: string;

  @OneToOne(() => User, (user) => user.customer, { nullable: true })
  user: User;
}
