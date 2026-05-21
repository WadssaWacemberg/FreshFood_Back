<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-24.14.1-green" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/TypeScript-Standard-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License" />
  <img src="https://img.shields.io/badge/Deployment-Render-purple" alt="Cloud" />
</p>

# Vitalis API

> **Documentação Técnica: Sistema de Gestão de Conteúdo (Back-End)**

Esta API foi desenvolvida para servir como o núcleo de persistência e lógica de negócio. A arquitetura foi concebida focando em modularidade, escalabilidade e manutenibilidade seguindo as melhores práticas de mercado.

## 🚀 Status do Sistema
* **Ambiente de Produção:** [https://vitalis-api-4oco.onrender.com](https://vitalis-api-4oco.onrender.com)
* **Documentação de API (Swagger):** [https://vitalis-api-4oco.onrender.com/swagger](https://vitalis-api-4oco.onrender.com/swagger)

## 🛠️ Stack Tecnológica
* **Framework:** NestJS (Node.js)
* **Linguagem:** TypeScript
* **Persistência:** PostgreSQL com TypeORM
* **Infraestrutura:** Render (PaaS)

## 🏗️ Arquitetura do Projeto
O sistema é estruturado em módulos independentes:
1. **Produto:** Gerenciamento de entidades de ativos.
2. **Categoria:** Organização hierárquica e taxonômica.
3. **Usuário:** Gestão de identidades e perfis.
4. **Auth:** Autenticação baseada em tokens (JWT).



[Image of REST API client server architecture]


## ⚙️ Configuração e Execução
Comandos de Execução
Desenvolvimento: npm run start:dev

Build: npm run build

Produção: npm run start:prod

📦 Variáveis de Ambiente
O projeto exige a variável DATABASE_URL (String de conexão PostgreSQL com SSL habilitado).

📄 Licença
Projeto licenciado sob a licença MIT.

### Instalação
```bash
npm install
