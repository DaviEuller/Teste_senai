import { IsInt, IsNumber, IsDateString, Min } from 'class-validator';

export class CreateEntradaDto {
  @IsInt()
  @Min(1)
  produto_id: number;

  @IsInt()
  @Min(1)
  quantidade: number;

  @IsDateString()
  data_entrada: string;

  @IsNumber()
  @Min(0)
  valor_unitario: number;
}