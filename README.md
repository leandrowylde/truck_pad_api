# Truck Pad Test API

API de teste empresa Truck Pad

## Descriçãp

A API em questão foi desenvolvida utilizando-se Node.JS com o framework Express e database Postgres. Para o migration do database, existe a dependência de instalação do sequelize-cli

## Instalação

Para utilizar a API em sua máquina, certifique-se de que tenha uma instância de Postgres rodando em sua máquina.

### Download das dependências

```bash
yarn install

```

```bash
npm install
```

### Database Migration

```bash
yarn global add sequelize-cli

yarn db:migrate
```

```bash
npm install --global sequelize-cli

npm run db:migrate
```

### Run app

```bash
yarn start
```

```bash
npm run start
```

### Test

```bash
yarn test
```

```bash
npm run test
```
