import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome!: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false, unique: true })
  @ApiProperty({ example: 'email@email.com.br' })
  usuario!: string;

  @ApiProperty({
    type: String,
    description: 'Senha do usuário (mínimo de 8 caracteres)',
    required: true,
    writeOnly: true,
    example: 'senhaForte123',
  })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio' })
  @Column({ length: 255, nullable: false })
  senha!: string;

  @Column({ length: 5000, nullable: true })
  @ApiProperty({ required: false })
  foto!: string;

  @ApiProperty({ type: () => Produto, isArray: true })
  @OneToMany(() => Produto, (produto) => produto.usuario)
  produto!: Produto[];
}
