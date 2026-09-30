import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity.js';
import { Repository, Equal} from 'typeorm';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';

@Injectable()
export class ProdutosService {
  constructor (
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    const produto = this.produtoRepository.create(createProdutoDto)

    return await this.produtoRepository.save(produto);
  }

  async findAll() {
    return await this.produtoRepository.find();
  }

  async findById(id: number) {
    return await this.produtoRepository.findOne({ where: {id}, });
  }

  async findByLimit(qtd: number) {
    return await this.produtoRepository.find({
      where: {
        quantidade: Equal(qtd),
      }
    },  
  )};   

  async findByCategoria(Categoria: string) {
    return await this.produtoRepository.find({
      where : {
        categoria: Categoria
      }
    })
  }

  async editarProduto(id: number, updateProdutoDto:UpdateProdutoDto) {
    await this.produtoRepository.update(id, updateProdutoDto);

    return await this.produtoRepository.findOne({
      where: {id},
    });
  }

  async delete (id:number) {
    return await this.produtoRepository.delete(id);
  }
}