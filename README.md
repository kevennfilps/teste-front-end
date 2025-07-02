# Teste Front-End - Teddy

Sistema de gerenciamento de clientes, desenvolvido por **Keven Rodrigues de Aguiar** em React + Vite + TypeScript.  
Conta com layout responsivo, integração com API REST, CRUD completo de clientes, seleção múltipla, arquitetura preparada para microfrontends, **testes unitários automáticos** e pronto para deploy em Docker ou Vercel.

---

## Funcionalidades

- Tela de login
- Listagem de clientes paginada, com busca na API
- Cadastro, edição, exclusão e seleção de clientes (CRUD + seleção múltipla)
- Visualização de clientes selecionados
- Layout responsivo, Sidebar/Topbar fixos
- Componentes reutilizáveis e service para integração backend
- Arquitetura preparada para microfrontends
- **Testes unitários automáticos (Jest + React Testing Library)**
- **Deploy automatizado na Vercel e suporte a Docker**

---

## Tecnologias

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS/SCSS](https://sass-lang.com/)
- [React Router Dom](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vercel](https://vercel.com/)

---

## Como rodar o projeto

### 1. Pré-requisitos

- Node.js v18+ (ou superior)
- NPM (ou Yarn/Pnpm)
- Docker (opcional, para rodar em container)
- Backend/API disponível (consulte documentação/Swagger)

---

### 2. Rodando em modo desenvolvimento

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/kevennfilps/teste-front-end.git
cd teste-front-end
npm install
npm run dev
```
- O projeto estará disponível em: http://localhost:5173/

### 3. Rodando via Docker

- Para build e execução da versão de produção:

# Build da imagem
```bash
docker build -t teste-front-end .
```
# Rodar o container na porta 8080
```bash
docker run -p 8080:80 meu-front
```
- Acesse em http://localhost:8080

### 4. Testes Unitários

- O projeto está configurado com Jest e React Testing Library.
Para rodar todos os testes:
```bash
npm test
```
- Os testes ficam em arquivos .test.tsx próximos dos componentes e páginas principais.

### 5. Deploy automático na Vercel

- Projeto pronto para deploy na Vercel:
- Faça login na Vercel e clique em Import Project.
- Selecione o repositório GitHub.
- Confirme as configurações detectadas:
- Framework: Vite
- Build Command: npm run build
- Output Directory: dist
- Clique em Deploy.
- A cada push na branch principal, o deploy será realizado automaticamente.

### 6. Estrutura de pastas

.
├── public/
│ ├── arrow_back.svg
│ ├── logo.png
│ └── vite.svg
├── src/
│ ├── assets/         # Imagens e arquivos estáticos
│ ├── components/     # Componentes reutilizáveis (Sidebar, Topbar, ClientCard, Modais, etc)
│ ├── contexts/       # Contextos globais (ex: clientes selecionados)
│ ├── pages/          # Telas principais (Login, Listagem, Selecionados)
│ ├── routes/         # Definição das rotas (opcional)
│ ├── services/       # Serviços de integração com a API (Axios)
│ ├── types/          # Tipos e interfaces TypeScript globais
│ ├── index.scss      # Estilos globais
│ ├── main.tsx        # Bootstrap do React
│ └── App.tsx         # Entrypoint das rotas
├── Dockerfile
├── nginx.conf
├── vite.config.ts
├── jest.config.cjs
├── jest.setup.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── package.json
├── README.md
└── ...
