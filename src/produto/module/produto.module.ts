import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../services/produto.service';
import { ProdutoController } from '../controller/produto.controller';
import { CategoriaModule } from '../../categoria/module/categoria.module';
import { UsuarioModule } from '../../usuario/module/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
    CategoriaModule,
    UsuarioModule,
  ],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}
