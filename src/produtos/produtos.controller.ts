import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get('Quantidade/:Qtd')
  findByLimit(@Param('Qtd') qtd: number) {
    return this.produtosService.findByLimit(qtd)
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.produtosService.findById(id)
  }


  @Get('categoria/:categoria')
  findByCategoria(@Param('categoria') categoria: string) {
    return this.produtosService.findByCategoria(categoria)
  }

  @Patch(':id')
  update(@Param('id') id: number  , @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.editarProduto(id, updateProdutoDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.produtosService.delete(id)
  }
}
