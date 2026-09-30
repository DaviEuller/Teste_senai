import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';
import { ProdutosController } from './produtos.controller.js';
import { Produto } from './entities/produto.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})

export class ProdutosModule {}