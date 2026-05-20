/* eslint-disable @typescript-eslint/no-unsafe-return */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { Produto } from '../entities/produto.entity';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { UsuarioService } from '../../usuario/services/usuario.service';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true,
        usuario: true,
      },
    });
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
        usuario: true,
      },
    });

    if (!produto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }

    return produto;
  }

  async findByTitulo(titulo: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        categoria: true,
        usuario: true,
      },
    });
  }

  async create(produto: Produto): Promise<Produto> {
    if (produto.categoria && produto.categoria.id) {
      await this.categoriaService.findById(produto.categoria.id);
      return await this.produtoRepository.save(produto);
    } else {
      throw new HttpException(
        'A Categoria do produto não pode ser nula ou vazia!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.produtoRepository.delete(id);
  }

  async update(produto: Produto): Promise<Produto> {
    const buscaProduto: Produto = await this.findById(produto.id);

    if (!buscaProduto || !produto.id) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }

    if (produto.categoria && produto.categoria.id) {
      await this.categoriaService.findById(produto.categoria.id);
      return await this.produtoRepository.save(produto);
    } else {
      throw new HttpException(
        'A Categoria não pode ser nula!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
