
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50 })
  categoria: string;

  @Column({ length: 20 })
  unidade_medida: string;

  @Column({ type: 'int', default: 0 })
  quantidade: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor_unitario: number;

  @Column({ type: 'int', default: 0 })
  estoque_minimo: number;

  @Column({ type: 'int', default: 100 })
  estoque_maximo: number;
}