# 🖥️ Blog Pessoal — Frontend (React + Vite + TypeScript)

Interface web do Projeto 02 – Generation Brasil, consumindo a API REST construída em NestJS + TypeORM.
Foco em SPA (Single Page Application), componentes reutilizáveis e integração com o backend via HTTP.

🔗 Backend: repositório separado: [BlogPessoal](https://github.com/MaeliPalharini/blogpessoal)

## 🚀 Tecnologias

    - React 18 + TypeScript
    
    - Vite (dev server e build)

    - ESLint (padrões de código)

    - Tailwind CSS

## 📦 Pré-requisitos

Node.js ≥ 18

npm ou yarn ou pnpm

## 🔐 Integração com o backend

Autenticação (JWT)

Login obtém accessToken da API e guarda (ex.: localStorage).

Requisições autenticadas enviam Authorization: Bearer <token>.

Em erro 401, redirecionar para login.

## Entidades principais

    👤 Usuário
    
    📝 Postagem
    
    🏷️ Tema

## 🧑‍💻 Autoria
Projeto desenvolvido por Maeli Palharini durante o bootcamp da Generation Brasil 💜

## 📌 Licença
Este projeto está sob a licença MIT — sinta-se livre para usar, aprender e contribuir!
