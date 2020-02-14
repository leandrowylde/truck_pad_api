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

##### Response 200

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

##### Payload

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

##### Response 201

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

PUT http://localhost:300/drivers/1

##### Payload

```json
{
  "name": "Test Driver Updated"
}
```

##### Response 204(No Content)

DELETE http://localhost:3000/drivers/1

##### Response 204(No Content)

#### Trucks

GET http://localhost:3000/trucks

##### Response 200

```json
{
  "trucks": [
    {
      "id": 1,
      "plate": "HGF-9746",
      "model": "Truck model",
      "brand": "Truck brand",
      "truck_type_id": 1,
      "createdAt": "2020-02-14T18:51:58.921Z",
      "updatedAt": "2020-02-14T18:51:58.921Z",
      "TruckTypeId": 1,
      "Freights": [],
      "truck_type": {
        "id": 1,
        "int_code": 1,
        "truck_type": "Caminhão 3/4",
        "createdAt": "2020-02-14T18:51:58.877Z",
        "updatedAt": "2020-02-14T18:51:58.877Z"
      }
    },
    {
      "id": 2,
      "plate": "LJU-1234",
      "model": "Truck model 2",
      "brand": "Truck brand 2",
      "truck_type_id": 2,
      "createdAt": "2020-02-14T18:51:58.921Z",
      "updatedAt": "2020-02-14T18:51:58.921Z",
      "TruckTypeId": 2,
      "Freights": [],
      "truck_type": {
        "id": 2,
        "int_code": 2,
        "truck_type": "Caminhão Toco",
        "createdAt": "2020-02-14T18:51:58.877Z",
        "updatedAt": "2020-02-14T18:51:58.877Z"
      }
    }
  ],
  "count": 2
}
```

POST http://localhost:300/trucks

##### Payload

```json
{
  "plate": "HGF-9746",
  "model": "Truck model",
  "brand": "Truck brand",
  "truck_type_id": 1
}
```

##### Response 201

```json
{
  "id": 2,
  "plate": "HGF-9746",
  "model": "Truck model",
  "brand": "Truck brand",
  "truck_type_id": 1,
  "createdAt": "2020-02-14T18:51:58.921Z",
  "updatedAt": "2020-02-14T18:51:58.921Z"
}
```

PUT http://localhost:300/trucks/1

##### Payload

```json
{
  "model": "Truck Model Updated"
}
```

##### Response 204(No Content)

DELETE http://localhost:3000/trucks/1

##### Response 204(No Content)

#### Freights (Fretes)

GET http://localhost:3000/freights

##### Response 200

```json
{
  "freights": [
    {
      "id": 3,
      "origin": "São Paulo",
      "destination": "Belo Horizonte",
      "latitude_origin": 56.78263763,
      "longitude_origin": -176.37627363,
      "latitude_destination": 45.73648373,
      "longitude_destination": -78.37873653,
      "has_load_to_origin": false,
      "check_in_date": "2020-02-15T00:00:00.000Z",
      "truck_id": 1,
      "driver_id": 1,
      "createdAt": "2020-02-14T19:19:08.204Z",
      "updatedAt": "2020-02-14T19:19:08.204Z",
      "DriverId": 1,
      "TruckId": 1,
      "driver": {
        "id": 1,
        "name": "Test Driver",
        "age": 29,
        "gender": "M",
        "has_own_vehicle": true,
        "cnh_type": "E",
        "createdAt": "2020-02-14T18:51:58.899Z",
        "updatedAt": "2020-02-14T18:51:58.899Z"
      },
      "truck": {
        "id": 1,
        "plate": "HGF-9746",
        "model": "Truck model",
        "brand": "Truck brand",
        "truck_type_id": 1,
        "createdAt": "2020-02-14T18:51:58.921Z",
        "updatedAt": "2020-02-14T18:51:58.921Z",
        "TruckTypeId": 1,
        "truck_type": {
          "id": 1,
          "int_code": 1,
          "truck_type": "Caminhão 3/4",
          "createdAt": "2020-02-14T18:51:58.877Z",
          "updatedAt": "2020-02-14T18:51:58.877Z"
        }
      }
    },
    {
      "id": 2,
      "origin": "São Paulo",
      "destination": "Belo Horizonte",
      "latitude_origin": 56.78263763,
      "longitude_origin": -176.37627363,
      "latitude_destination": 45.73648373,
      "longitude_destination": -78.37873653,
      "has_load_to_origin": false,
      "check_in_date": "2020-02-11T00:00:00.000Z",
      "truck_id": 1,
      "driver_id": 1,
      "createdAt": "2020-02-14T19:18:53.244Z",
      "updatedAt": "2020-02-14T19:18:53.244Z",
      "DriverId": 1,
      "TruckId": 1,
      "driver": {
        "id": 1,
        "name": "Test Driver",
        "age": 29,
        "gender": "M",
        "has_own_vehicle": true,
        "cnh_type": "E",
        "createdAt": "2020-02-14T18:51:58.899Z",
        "updatedAt": "2020-02-14T18:51:58.899Z"
      },
      "truck": {
        "id": 1,
        "plate": "HGF-9746",
        "model": "Truck model",
        "brand": "Truck brand",
        "truck_type_id": 1,
        "createdAt": "2020-02-14T18:51:58.921Z",
        "updatedAt": "2020-02-14T18:51:58.921Z",
        "TruckTypeId": 1,
        "truck_type": {
          "id": 1,
          "int_code": 1,
          "truck_type": "Caminhão 3/4",
          "createdAt": "2020-02-14T18:51:58.877Z",
          "updatedAt": "2020-02-14T18:51:58.877Z"
        }
      }
    },
    {
      "id": 1,
      "origin": "São Paulo",
      "destination": "Belo Horizonte",
      "latitude_origin": 56.78263763,
      "longitude_origin": -176.37627363,
      "latitude_destination": 45.73648373,
      "longitude_destination": -78.37873653,
      "has_load_to_origin": true,
      "check_in_date": "2020-02-11T00:00:00.000Z",
      "truck_id": 2,
      "driver_id": 2,
      "createdAt": "2020-02-14T19:18:44.351Z",
      "updatedAt": "2020-02-14T19:18:44.351Z",
      "DriverId": 2,
      "TruckId": 2,
      "driver": {
        "id": 2,
        "name": "Test Driver 2",
        "age": 35,
        "gender": "M",
        "has_own_vehicle": false,
        "cnh_type": "D",
        "createdAt": "2020-02-14T18:51:58.899Z",
        "updatedAt": "2020-02-14T18:51:58.899Z"
      },
      "truck": {
        "id": 2,
        "plate": "LJU-1234",
        "model": "Truck model 2",
        "brand": "Truck brand 2",
        "truck_type_id": 2,
        "createdAt": "2020-02-14T18:51:58.921Z",
        "updatedAt": "2020-02-14T18:51:58.921Z",
        "TruckTypeId": 2,
        "truck_type": {
          "id": 2,
          "int_code": 2,
          "truck_type": "Caminhão Toco",
          "createdAt": "2020-02-14T18:51:58.877Z",
          "updatedAt": "2020-02-14T18:51:58.877Z"
        }
      }
    }
  ],
  "count": 3
}
```

GET http://localhost:3000/freights?has_load_to_origin=true

##### Response 200

```json
{
  "freights": [
    {
      "id": 1,
      "origin": "São Paulo",
      "destination": "Belo Horizonte",
      "latitude_origin": 56.78263763,
      "longitude_origin": -176.37627363,
      "latitude_destination": 45.73648373,
      "longitude_destination": -78.37873653,
      "has_load_to_origin": true,
      "check_in_date": "2020-02-11T00:00:00.000Z",
      "truck_id": 2,
      "driver_id": 2,
      "createdAt": "2020-02-14T19:18:44.351Z",
      "updatedAt": "2020-02-14T19:18:44.351Z",
      "DriverId": 2,
      "TruckId": 2,
      "driver": {
        "id": 2,
        "name": "Test Driver 2",
        "age": 35,
        "gender": "M",
        "has_own_vehicle": false,
        "cnh_type": "D",
        "createdAt": "2020-02-14T18:51:58.899Z",
        "updatedAt": "2020-02-14T18:51:58.899Z"
      },
      "truck": {
        "id": 2,
        "plate": "LJU-1234",
        "model": "Truck model 2",
        "brand": "Truck brand 2",
        "truck_type_id": 2,
        "createdAt": "2020-02-14T18:51:58.921Z",
        "updatedAt": "2020-02-14T18:51:58.921Z",
        "TruckTypeId": 2,
        "truck_type": {
          "id": 2,
          "int_code": 2,
          "truck_type": "Caminhão Toco",
          "createdAt": "2020-02-14T18:51:58.877Z",
          "updatedAt": "2020-02-14T18:51:58.877Z"
        }
      }
    }
  ],
  "count": 1
}
```

GET http://localhost:3000/freights?has_load_to_origin=true&period=01/02/2020-13/02/2020

##### Response 200

```json
{
  "freights": [
    {
      "id": 1,
      "origin": "São Paulo",
      "destination": "Belo Horizonte",
      "latitude_origin": 56.78263763,
      "longitude_origin": -176.37627363,
      "latitude_destination": 45.73648373,
      "longitude_destination": -78.37873653,
      "has_load_to_origin": true,
      "check_in_date": "2020-02-11T00:00:00.000Z",
      "truck_id": 2,
      "driver_id": 2,
      "createdAt": "2020-02-14T19:18:44.351Z",
      "updatedAt": "2020-02-14T19:18:44.351Z",
      "DriverId": 2,
      "TruckId": 2,
      "driver": {
        "id": 2,
        "name": "Test Driver 2",
        "age": 35,
        "gender": "M",
        "has_own_vehicle": false,
        "cnh_type": "D",
        "createdAt": "2020-02-14T18:51:58.899Z",
        "updatedAt": "2020-02-14T18:51:58.899Z"
      },
      "truck": {
        "id": 2,
        "plate": "LJU-1234",
        "model": "Truck model 2",
        "brand": "Truck brand 2",
        "truck_type_id": 2,
        "createdAt": "2020-02-14T18:51:58.921Z",
        "updatedAt": "2020-02-14T18:51:58.921Z",
        "TruckTypeId": 2,
        "truck_type": {
          "id": 2,
          "int_code": 2,
          "truck_type": "Caminhão Toco",
          "createdAt": "2020-02-14T18:51:58.877Z",
          "updatedAt": "2020-02-14T18:51:58.877Z"
        }
      }
    }
  ],
  "count": 1
}
```

GET http://localhost:3000/freights?has_load_to_origin=true&period=01/02/2020-13/02/2020&grouped_by_truck_type=true

##### Response 200

```json
{
  "Caminhão Toco": [
    {
      "id": 1,
      "origin": "São Paulo",
      "destination": "Belo Horizonte",
      "latitude_origin": 56.78263763,
      "longitude_origin": -176.37627363,
      "latitude_destination": 45.73648373,
      "longitude_destination": -78.37873653,
      "has_load_to_origin": true,
      "check_in_date": "2020-02-11T00:00:00.000Z",
      "truck_id": 2,
      "driver_id": 2,
      "createdAt": "2020-02-14T19:18:44.351Z",
      "updatedAt": "2020-02-14T19:18:44.351Z",
      "DriverId": 2,
      "TruckId": 2,
      "driver": {
        "id": 2,
        "name": "Test Driver 2",
        "age": 35,
        "gender": "M",
        "has_own_vehicle": false,
        "cnh_type": "D",
        "createdAt": "2020-02-14T18:51:58.899Z",
        "updatedAt": "2020-02-14T18:51:58.899Z"
      },
      "truck": {
        "id": 2,
        "plate": "LJU-1234",
        "model": "Truck model 2",
        "brand": "Truck brand 2",
        "truck_type_id": 2,
        "createdAt": "2020-02-14T18:51:58.921Z",
        "updatedAt": "2020-02-14T18:51:58.921Z",
        "TruckTypeId": 2,
        "truck_type": {
          "id": 2,
          "int_code": 2,
          "truck_type": "Caminhão Toco",
          "createdAt": "2020-02-14T18:51:58.877Z",
          "updatedAt": "2020-02-14T18:51:58.877Z"
        }
      }
    }
  ]
}
```

POST http://localhost:300/freights

##### Payload

```json
{
  "origin": "Manaus",
  "destination": "Rio de Janeiro",
  "latitude_origin": -78.78263763,
  "longitude_origin": 100.37627363,
  "latitude_destination": 45.73648373,
  "longitude_destination": -78.37873653,
  "has_load_to_origin": true,
  "check_in_date": "2020-02-14 15:20:10",
  "truck_id": 2,
  "driver_id": 2
}
```

##### Response 201

```json
{
  "id": 1,
  "origin": "Manaus",
  "destination": "Rio de Janeiro",
  "latitude_origin": -78.78263763,
  "longitude_origin": 100.37627363,
  "latitude_destination": 45.73648373,
  "longitude_destination": -78.37873653,
  "has_load_to_origin": true,
  "check_in_date": "2020-02-14 15:20:10",
  "truck_id": 2,
  "driver_id": 2,
  "createdAt": "2020-02-14T18:51:58.921Z",
  "updatedAt": "2020-02-14T18:51:58.921Z"
}
```

PUT http://localhost:300/freights/1

##### Payload

```json
{
  "destination": "São Paulo"
}
```

##### Response 204(No Content)

DELETE http://localhost:3000/freights/1

##### Response 204(No Content)
