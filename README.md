# Social Media Website (Twitter Clone)

Este é um projeto de uma rede social similar ao Twitter, desenvolvido utilizando **React** e **Next.js**. O projeto também integra diversas tecnologias modernas para estilização, autenticação e gerenciamento de banco de dados.

## Tecnologias Utilizadas

- **[React](https://reactjs.org/)** - Biblioteca para construção da interface de usuário.
- **[Next.js](https://nextjs.org/)** - Framework para React com renderização do lado do servidor.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utilizado para estilização responsiva e moderna.
- **[Neon Tech](https://neon.tech/)** - Plataforma para gerenciamento do banco de dados PostgreSQL.
- **[Prisma](https://www.prisma.io/)** - ORM para manipulação do banco de dados PostgreSQL.
- **[Clerk](https://clerk.dev/)** - Serviço para autenticação de usuários.
- **[shadcn/ui](https://ui.shadcn.com/)** - Biblioteca de componentes UI.

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Nunderns/website-nextjs.git
   cd website-nextjs
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente (.env):**
   Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:
   ```env
    PRISMA_CLIENT_ENGINE_TYPE=binary
    PRISMA_CLI_QUERY_ENGINE_TYPE=binary

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cHJvbW90ZWQtc2hlZXBkb2ctMTAuY2xlcmsuYWNjb3VudHMuZGV2JA
    CLERK_SECRET_KEY=sk_test_VKobRfUvxfYxqhVgjwUVQTA7vKqGiX9OB26m1IZxpA

    DATABASE_URL=postgresql://neondb_owner:npg_PR5xwrCtZ4km@ep-super-bird-a8nu380j-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
   ```

4. **Execute as migrações do Prisma:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Como Funciona

- **Autenticação:** Gerenciada pelo **Clerk**, permitindo registro e login de usuários.
- **Banco de Dados:** Utiliza **PostgreSQL** hospedado no **Neon Tech**, com gerenciamento feito pelo **Prisma**.
- **Interface:** Estilização responsiva e moderna utilizando **Tailwind CSS** e componentes prontos do **shadcn/ui**.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento.
- `npm run build` - Cria uma versão de produção do app.
- `npm start` - Inicia a aplicação em modo de produção.
- `npx prisma studio` - Abre o Prisma Studio para gerenciar o banco de dados.



