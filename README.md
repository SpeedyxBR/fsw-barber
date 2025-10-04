# 🪒 FSW Barber

![Capa do Projeto](./public/Capa.png)

> **Sistema de agendamento para barbearias** - Desenvolvido com Next.js 15, Prisma e PostgreSQL

## 📋 Sobre o Projeto

O **FSW Barber** é uma aplicação web moderna para gerenciamento de agendamentos em barbearias. O sistema permite que clientes visualizem barbearias cadastradas, vejam os serviços disponíveis e realizem agendamentos de forma intuitiva.

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15.5.3 + React 18
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL
- **ORM**: Prisma 6.16.1
- **Containerização**: Docker
- **Linguagem**: TypeScript
- **Ícones**: Lucide React
- **Fontes**: Geist Sans & Geist Mono
- **Ferramentas de Desenvolvimento**: 
  - ESLint + Prettier
  - Husky + Lint-staged
  - Commitlint

## 🏗️ Arquitetura do Banco de Dados

### Modelos Principais

- **User**: Usuários do sistema (clientes)
- **BarberShop**: Barbearias cadastradas
- **BarbershopService**: Serviços oferecidos pelas barbearias
- **Booking**: Agendamentos realizados pelos usuários

### Relacionamentos

```
User 1:N Booking N:1 BarbershopService N:1 BarberShop
```

## 🛠️ Status do Desenvolvimento

### ✅ Concluído

- [x] Configuração inicial do projeto Next.js 15
- [x] Setup do Prisma com PostgreSQL
- [x] Configuração do Docker para banco de dados
- [x] Schema do banco de dados definido
- [x] Estrutura base da aplicação
- [x] Sistema de componentes UI com shadcn/ui
- [x] Layout responsivo e tema dark
- [x] Página inicial com listagem de barbearias
- [x] Componente de busca e filtros rápidos
- [x] Página individual de barbearia
- [x] Componentes reutilizáveis (Header, Cards, Buttons)
- [x] Integração com banco de dados via Prisma
- [x] Sistema de roteamento dinâmico

### 🔄 Em Desenvolvimento

- [ ] Sistema de autenticação
- [ ] Funcionalidade de agendamento
- [ ] Sistema de reservas
- [ ] Dashboard administrativo
- [ ] Gerenciamento de serviços

### 📋 Próximas Etapas

- [ ] Implementação da API REST completa
- [ ] Sistema de autenticação com NextAuth
- [ ] Integração com sistema de pagamentos
- [ ] Notificações por email/SMS
- [ ] Sistema de avaliações
- [ ] Relatórios e analytics
- [ ] Funcionalidade de busca avançada
- [ ] Sistema de notificações em tempo real

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd fsw-barber
```

2. **Instale as dependências**

```bash
npm install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

```bash
# Crie um arquivo .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/fsw_barber"
```

4. **Inicie o banco de dados**

```bash
docker-compose up -d
```

5. **Execute as migrações e gere o cliente Prisma**

```bash
npm run db:push
npm run db:generate
# ou para popular o banco com dados iniciais
npm run db:seed
```

6. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linting
npm run db:generate  # Gera cliente Prisma
npm run db:push      # Aplica mudanças no schema ao banco
npm run db:seed      # Popula banco com dados iniciais
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
fsw-barber/
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   ├── migrations/            # Migrações do Prisma
│   └── seed.ts               # Dados iniciais do banco
├── src/
│   └── app/                   # App Router do Next.js
│       ├── _components/       # Componentes reutilizáveis
│       │   ├── ui/           # Componentes UI (shadcn/ui)
│       │   ├── header.tsx    # Cabeçalho da aplicação
│       │   ├── barbershop.item.tsx # Item de barbearia
│       │   └── booking-item.tsx    # Item de agendamento
│       ├── _constants/        # Constantes da aplicação
│       │   └── search.ts     # Opções de busca rápida
│       ├── _lib/             # Utilitários e configurações
│       │   ├── prisma.ts     # Cliente Prisma
│       │   └── utils.ts      # Funções utilitárias
│       ├── barbershops/      # Páginas de barbearias
│       │   └── [id]/         # Página dinâmica de barbearia
│       ├── fonts/            # Fontes customizadas (Geist)
│       ├── globals.css       # Estilos globais + Tailwind
│       ├── layout.tsx        # Layout principal
│       └── page.tsx          # Página inicial
├── public/                   # Assets estáticos (logos, ícones)
├── docker-compose.yml        # Configuração do Docker
├── components.json           # Configuração shadcn/ui
├── tailwind.config.ts        # Configuração Tailwind CSS
└── package.json             # Dependências e scripts
```

## 🎯 Funcionalidades

### Para Clientes

- [x] Visualizar barbearias disponíveis
- [x] Navegar entre barbearias com interface intuitiva
- [x] Busca rápida por tipo de serviço
- [x] Ver detalhes da barbearia
- [ ] Ver serviços e preços detalhados
- [ ] Realizar agendamentos
- [ ] Sistema de autenticação
- [ ] Gerenciar perfil
- [ ] Histórico de agendamentos
- [ ] Sistema de avaliações

### Para Barbearias

- [ ] Dashboard administrativo
- [ ] Gerenciar serviços e preços
- [ ] Visualizar agendamentos
- [ ] Configurar horários de funcionamento
- [ ] Relatórios de vendas
- [ ] Gerenciar perfil da barbearia

### Funcionalidades Técnicas Implementadas

- [x] Interface responsiva com Tailwind CSS
- [x] Tema dark mode
- [x] Componentes reutilizáveis com shadcn/ui
- [x] Roteamento dinâmico com App Router
- [x] Integração com banco PostgreSQL via Prisma
- [x] Sistema de busca e filtros
- [x] Otimização de imagens com Next.js Image

## 🤝 Contribuição

Este projeto está em desenvolvimento ativo. Contribuições são bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**Desenvolvedor**: [Andrel]
**Email**: [andrel.cilva58@gmail.com]
**LinkedIn**: [https://www.linkedin.com/in/andrel-carvalho]

---

<div align="center">
  <p>Desenvolvido com ❤️ para a comunidade de desenvolvedores</p>
  <p>🚀 <strong>Em produção ativa</strong> 🚀</p>
</div>
