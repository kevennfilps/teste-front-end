# Teste Front-End - Teddy

Este projeto é um sistema de gerenciamento de clientes, desenvolvido em React + Vite + TypeScript, com layout responsivo, integração com API REST, modal dinâmico, paginação, seleção de múltiplos clientes e arquitetura preparada para microfrontends.

---

## Funcionalidades

- Tela de login
- Listagem de clientes paginada, com busca na API
- Cadastro, edição, exclusão e seleção de clientes (CRUD + seleção múltipla)
- Visualização de clientes selecionados
- Layout responsivo, Sidebar/Topbar fixos
- Estrutura de componentes reusáveis e service para integração backend
- Pronto para deploy com Docker ou Vercel

---

## Tecnologias

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS/SCSS](https://sass-lang.com/)
- [React Router Dom](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Docker](https://www.docker.com/)

---

## Como rodar o projeto

### **1. Pré-requisitos**

- Node.js v18+ (ou superior)
- NPM (ou Yarn/Pnpm)
- Docker instalado (opcional, para rodar em container)
- Backend/API disponível (consulte documentação/Swagger para endpoints e exemplos de retorno)

---

### **2. Rodando em modo desenvolvimento**

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/kevennfilps/teste-front-end.git
cd teste-front-end
npm install
npm run dev

```
- O projeto estará disponível em: http://localhost:5173/

# Build da imagem
docker build -t teste-front-end .

# Rodar o container na porta 8080
docker run -p 8080:80 meu-front

- Acesse em http://localhost:8080