# 🪒 FSW Barber

![Capa do Projeto](./public/Capa.png)

> **Sistema de agendamento para barbearias** - Desenvolvido com Next.js 14, Prisma e PostgreSQL

## 📋 Sobre o Projeto

O **FSW Barber** é uma aplicação web moderna para gerenciamento de agendamentos em barbearias. O sistema permite que clientes visualizem barbearias cadastradas, vejam os serviços disponíveis e realizem agendamentos de forma intuitiva.

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 14.2.32 + React 18
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Containerização**: Docker
- **Linguagem**: TypeScript

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

- [x] Configuração inicial do projeto Next.js
- [x] Setup do Prisma com PostgreSQL
- [x] Configuração do Docker para banco de dados
- [x] Schema do banco de dados definido
- [x] Estrutura base da aplicação

### 🔄 Em Desenvolvimento

- [ ] Interface de usuário (UI/UX)
- [ ] Sistema de autenticação
- [ ] CRUD de barbearias
- [ ] CRUD de serviços
- [ ] Sistema de agendamentos
- [ ] Dashboard administrativo

### 📋 Próximas Etapas

- [ ] Implementação da API REST
- [ ] Integração com sistema de pagamentos
- [ ] Notificações por email/SMS
- [ ] Sistema de avaliações
- [ ] Relatórios e analytics

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
```

3. **Configure as variáveis de ambiente**

```bash
# Crie um arquivo .env.local
DATABASE_URL="postgresql://postgres:password@localhost:5432/fsw_barber"
```

4. **Inicie o banco de dados**

```bash
docker-compose up -d
```

5. **Execute as migrações do Prisma**

```bash
npx prisma migrate dev
npx prisma generate
```

6. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
fsw-barber/
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   └── migrations/            # Migrações do Prisma
├── src/
│   ├── app/                   # App Router do Next.js
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   └── generated/             # Client Prisma gerado
├── public/                    # Assets estáticos
├── docker-compose.yml         # Configuração do Docker
└── package.json
```

## 🎯 Funcionalidades Planejadas

### Para Clientes

- [ ] Visualizar barbearias próximas
- [ ] Ver serviços e preços
- [ ] Realizar agendamentos
- [ ] Gerenciar perfil
- [ ] Histórico de agendamentos

### Para Barbearias

- [ ] Dashboard administrativo
- [ ] Gerenciar serviços
- [ ] Visualizar agendamentos
- [ ] Configurar horários de funcionamento
- [ ] Relatórios de vendas

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
