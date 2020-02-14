# Truck Pad Test API

API de teste empresa Truck Pad

## Descrição

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

### Endpoints

#### Drivers

GET http://localhost:3000/drivers

Resposta de exemplo

```json
{
  "drivers": [
    {
      "id": 2,
      "name": "Test Driver 2",
      "age": 35,
      "gender": "M",
      "has_own_vehicle": false,
      "cnh_type": "D",
      "createdAt": "2020-02-14T18:51:58.899Z",
      "updatedAt": "2020-02-14T18:51:58.899Z",
      "Freights": []
    }
  ],
  "count": 1
}
```

GET http://localhost:3000/drivers?has_own_vehicle=true

```json
{
  "drivers": [
    {
      "id": 1,
      "name": "Test Driver",
      "age": 29,
      "gender": "M",
      "has_own_vehicle": true,
      "cnh_type": "E",
      "createdAt": "2020-02-14T18:51:58.899Z",
      "updatedAt": "2020-02-14T18:51:58.899Z",
      "Freights": []
    }
  ],
  "count": 1
}
```

POST http://localhost:300/drivers

# Payload

```json
{
  "id": 1,
  "name": "Test Driver",
  "age": 29,
  "gender": "M",
  "has_own_vehicle": true,
  "cnh_type": "E"
}
```

# Response 200

```json
{
  "id": 1,
  "name": "Test Driver",
  "age": 29,
  "gender": "M",
  "has_own_vehicle": true,
  "cnh_type": "E"
}
```
