# 🖥️ Blog Pessoal — Frontend (React + Vite + TypeScript)

Interface web do Projeto 02 – Generation Brasil, consumindo a API REST construída em NestJS + TypeORM.
Foco em SPA (Single Page Application), componentes reutilizáveis e integração com o backend via HTTP.

🔗 Backend: repositório separado: [BlogPessoal](https://github.com/MaeliPalharini/blogpessoal)

---

## ✨ Funcionalidades

- Login e Cadastro de usuário
- Estado global de auth com **AuthContext** (login/logout, token e redirecionamentos)
- Feedback de carregamento com **react-spinners/ClipLoader**
- Formulários controlados com validações básicas
- Navbar com ação de **Sair**
- Integração com API (Axios)
- CRUD de Postagens (criar, ler, atualizar, deletar)
- CRUD de Temas (criar, ler, atualizar, deletar)
- Associação de Postagens a Temas
- Responsividade básica (mobile e desktop)
---

## 🧰 Tech stack

- React 18 + TypeScript
- Vite (dev/build/preview)
- React Router
- Axios
- Tailwind CSS
- ESLint + @typescript-eslint

---

## 📦 Pré-requisitos

Node.js ≥ 18

npm ou yarn ou pnpm

---

## 🔐 Integração com o backend

Autenticação (JWT)

Login obtém accessToken da API e guarda (ex.: localStorage).

Requisições autenticadas enviam Authorization: Bearer <token>.

Em erro 401, redirecionar para login.

---

## Entidades principais

    👤 Usuário
    
    📝 Postagem
    
    🏷️ Tema

---

## 🧑‍💻 Autoria
Projeto desenvolvido por Maeli Palharini durante o bootcamp da Generation Brasil 💜

---

## 📌 Licença
Este projeto está sob a licença MIT — sinta-se livre para usar, aprender e contribuir!
