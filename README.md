# 🚀 Automação Web com Cypress

Projeto desenvolvido para demonstrar boas práticas de automação de testes Web utilizando **Cypress**, seguindo uma arquitetura baseada em **Page Objects**, **Custom Commands**, integração contínua com **GitHub Actions**, geração de relatórios com **Mochawesome** e publicação automática no **GitHub Pages**.

---

[![Cypress Smoke Tests](https://github.com/Bruno-Dotto/Automacao-Web-Cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/Bruno-Dotto/Automacao-Web-Cypress/actions/workflows/cypress.yml)
[![Test Report](https://img.shields.io/badge/Test%20Report-Mochawesome-blue)](https://bruno-dotto.github.io/Automacao-Web-Cypress/)
![Cypress](https://img.shields.io/badge/Cypress-15.17.0-69D3A7?logo=cypress&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
[![License: MIT](https://img.shields.io/github/license/Bruno-Dotto/Automacao-Web-Cypress)](LICENSE)

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Tecnologias](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pipeline CI/CD](#-pipeline-cicd)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Relatórios](#-relatórios)
- [Casos Automatizados](#-casos-automatizados)
- [Boas Práticas](#-boas-práticas-utilizadas)
- [Roadmap](#-roadmap)
- [Autor](#-autor)

---

# 🎯 Objetivo

Este projeto foi desenvolvido para consolidar conhecimentos em:

- Automação Web
- Cypress
- JavaScript
- Page Objects
- Custom Commands
- FakerJS
- Smoke Tests
- GitHub Actions
- CI/CD
- Mochawesome
- GitHub Pages

---

# 🛠 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Cypress | Automação Web |
| JavaScript | Linguagem |
| FakerJS | Massa de dados |
| GitHub Actions | CI/CD |
| Mochawesome | Relatórios |
| GitHub Pages | Publicação do relatório |
| Node.js | Ambiente de execução |

---

# 🏗 Arquitetura

O projeto utiliza o padrão **Page Objects**, separando responsabilidades entre testes, páginas e comandos personalizados.

```mermaid
flowchart LR

A[Testes]

B[Page Objects]

C[Custom Commands]

D[Cypress]

A --> B

B --> C

C --> D
```

---

# 📁 Estrutura do Projeto

```
Automacao-Web-Cypress
│
├── .github
│   └── workflows
│       └── cypress.yml
│
├── cypress
│   ├── e2e
│   │
│   ├── fixtures
│   │
│   ├── reports
│   │
│   ├── screenshots
│   │
│   ├── videos
│   │
│   └── support
│       ├── commands
│       ├── pages
│       ├── checkout_commands.js
│       ├── login_commands.js
│       └── commands.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# 🚀 Pipeline CI/CD

```mermaid
flowchart TD

A[Git Push]

B[GitHub Actions]

C[Instala Dependências]

D[Executa Cypress]

E[Gera Mochawesome]

F[Publica GitHub Pages]

G[Upload Artifacts]

A --> B

B --> C

C --> D

D --> E

E --> F

F --> G
```

A pipeline executa automaticamente:

- Instalação das dependências
- Execução dos testes
- Geração do Mochawesome
- Publicação do relatório
- Upload de Artifacts

---

# ⚙ Instalação

Clone o projeto

```bash
git clone https://github.com/Bruno-Dotto/Automacao-Web-Cypress.git
```

Entre na pasta

```bash
cd Automacao-Web-Cypress
```

Instale as dependências

```bash
npm install
```

---

# 📦 Dependências utilizadas

## Cypress

```bash
npm install cypress --save-dev
```

## FakerJS

```bash
npm install @faker-js/faker
```

## Cypress Grep

```bash
npm install @cypress/grep --save-dev
```

## Mochawesome

```bash
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```

---

# ▶ Scripts Disponíveis

## Abrir o Cypress

```bash
npm run cy:open
```

## Executar todos os testes

```bash
npm run cy:run
```

## Executar Smoke

```bash
npm run smoke
```

## Executar Regressão

```bash
npm run regression
```

## Limpar relatórios

```bash
npm run clean-report
```

## Gerar Merge

```bash
npm run merge-report
```

## Gerar HTML

```bash
npm run generate-report
```

## Gerar relatório completo

```bash
npm run report
```

## Smoke + Relatório

```bash
npm run smoke-report
```

---

# 📊 Relatórios

Após cada execução são gerados:

- ✅ JSON
- ✅ HTML
- ✅ Screenshots em caso de falha
- ✅ Vídeos em caso de falha

### Relatório Online

👉 https://bruno-dotto.github.io/Automacao-Web-Cypress/

---

# ✅ Casos Automatizados

## Login

- Login com sucesso
- E-mail inválido
- Senha inválida
- E-mail em branco
- Senha em branco
- Navegação para cadastro

---

## Cadastro

- Cadastro com sucesso
- Usuário em branco
- E-mail em branco
- Senha em branco

---

## Checkout

- Preenchimento dos dados
- Seleção do país
- Seleção da cidade
- Métodos de pagamento
- Validação dos métodos
- Finalização do pedido

---

# 💡 Boas Práticas Utilizadas

- ✔ Page Objects
- ✔ Custom Commands
- ✔ Reutilização de código
- ✔ Geração dinâmica de massa de dados
- ✔ Estrutura escalável
- ✔ Smoke Tests
- ✔ GitHub Actions
- ✔ GitHub Pages
- ✔ Mochawesome
- ✔ CI/CD

---

# 📌 Roadmap

- [x] Login
- [x] Cadastro
- [x] Checkout
- [x] Page Objects
- [x] Custom Commands
- [x] GitHub Actions
- [x] Mochawesome
- [x] GitHub Pages
- [ ] Dashboard de Métricas
- [ ] Integração com Playwright
- [ ] Integração com Maestro

---

# 👨‍💻 Autor

**Bruno Dotto**

GitHub

https://github.com/Bruno-Dotto

LinkedIn

(Adicionar)

---

⭐ Caso este projeto tenha sido útil, deixe uma estrela no repositório.