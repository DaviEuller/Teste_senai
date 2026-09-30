import {
    IsString,
    IsNotEmpty,
    IsInt,
    IsNumber,
    Min
} from 'class-validator'

export class CreateProdutoDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsString()
    @IsNotEmpty()
    unidade_medida: string;

    @IsInt()
    @Min(0)
    valor_unitario: number;
}