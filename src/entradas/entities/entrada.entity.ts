import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Produto } from '../../produtos/entities/produto.entity.js';

@Entity('entradas')
export class Entrada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  produto_id: number;

  @Column()
  quantidade: number;

  @Column({ type: 'date' })
  data_entrada: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor_unitario: number;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;
}