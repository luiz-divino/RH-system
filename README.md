# Sistema de Gestão de RH (RH System)

## Descrição

Este é um sistema de linha de comando simples para gerenciamento de funcionários, desenvolvido em TypeScript e executado com Node.js. Ele permite adicionar, listar, buscar e remover funcionários do sistema.

## Funcionalidades

- **Adicionar Funcionários**: Inclua novos funcionários no sistema.
- **Listar Funcionários**: Exiba a lista completa de funcionários cadastrados.
- **Buscar Funcionário por ID**: Encontre um funcionário específico utilizando seu ID.
- **Remover Funcionário**: Exclua um funcionário do sistema.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/
├── src/
│   ├── domain/
│   │   ├── Cargo.ts         # Define os tipos de cargos disponíveis
│   │   └── Funcionario.ts   # Define a classe Funcionario
│   ├── services/
│   │   └── SistemaGestao.ts # Contém a lógica de negócio para gerenciar funcionários
│   └── index.ts             # Ponto de entrada da aplicação, onde o sistema é utilizado
├── package.json
└── tsconfig.json
```

## Cargos Disponíveis

Os seguintes cargos estão pré-definidos no sistema:
- `gerente`
- `desenvolvedor`
- `analista`
- `estagiario`
- `contador`

## Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1.  Clone o repositório para a sua máquina local.
2.  Navegue até o diretório do projeto.
3.  Instale as dependências com o seguinte comando:

    ```bash
    npm install
    ```

## Como Executar

Para executar a aplicação e ver os exemplos de uso definidos em `src/index.ts`, utilize o seguinte comando:

```bash
npx ts-node src/index.ts
```
ou  

cd build
node index.js

Isso irá:
1.  Adicionar alguns funcionários de exemplo.
2.  Listar todos os funcionários.
3.  Buscar um funcionário específico pelo ID.
4.  Remover um funcionário.
5.  Listar os funcionários restantes para mostrar o resultado da remoção.
