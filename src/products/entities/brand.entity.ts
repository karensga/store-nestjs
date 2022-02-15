import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar' })
  image: string;
}
