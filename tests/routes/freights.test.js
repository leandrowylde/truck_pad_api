const request = require("supertest");
const app = require("../../index");
const Freight = app.db.models.Freight;
const Driver = app.db.models.Driver;
const Truck = app.db.models.Truck;
let fakeFreight;
let driver1;
let driver2;
let truck1;
let truck2;

beforeEach(done => {
  // Driver.findOne({ where: { name: "Test Driver" } }).then(result => {
  //   driver1 = result;
  //   done();
  // });
  // Driver.findOne({ where: { name: "Test Driver 2" } }).then(result => {
  //   driver2 = result;
  //   done();
  // });
  // Truck.findOne({ where: { model: "Truck model" } }).then(result => {
  //   truck1 = result;
  //   done();
  // });
  // Truck.findOne({ where: { model: "Truck model 2" } }).then(result => {
  //   truck2 = result;
  //   done();
  // });

  Freight.destroy({ where: {} }).then(() => {
    Freight.bulkCreate([
      {
        origin: "São Paulo",
        destination: "Belo Horizonte",
        latitude_origin: -45.76473898,
        longitude_origin: 110.87365736,
        latitude_destination: 45.76473898,
        longitude_destination: -110.87365736,
        has_load_to_origin: false,
        check_in_date: "2020-02-10 10:10:10",
        truck_id: 2,
        driver_id: 2
      },
      {
        origin: "Fortaleza",
        destination: "Amapá",
        latitude_origin: -45.76473898,
        longitude_origin: 110.87365736,
        latitude_destination: 45.76473898,
        longitude_destination: -110.87365736,
        has_load_to_origin: true,
        check_in_date: "2020-02-14 15:10:10",
        truck_id: 3,
        driver_id: 3
      }
    ]).then(freights => {
      fakeFreight = freights[0];
      done();
    });
  });
});

describe("Routes: Freights", () => {
  describe("GET /freights", () => {
    it("should return a list of 2 freights", async () => {
      const res = await request(app).get("/freights");
      expect(res.statusCode).toEqual(200);
      expect(res.body.freights).toHaveLength(2);
      expect(res.body.count).toEqual(2);
    });
    it("should return a list of freights with no load to back to origin destination", async () => {
      const res = await request(app).get("/freights?has_load_to_origin=false");
      expect(res.statusCode).toEqual(200);
      expect(res.body.freights).toHaveLength(1);
      expect(res.body.count).toEqual(1);
    });
    it("should return a list of freights grouped by truck type", async () => {
      const res = await request(app).get(
        "/freights?grouped_by_truck_type=true"
      );
      expect(res.statusCode).toEqual(200);
      expect(res.body["Caminhão Toco"]).toHaveLength(1);
      expect(res.body["Caminhão Truck"]).toHaveLength(1);
    });
    it("should return a list of freights of a specific period date", async () => {
      const res = await request(app).get(
        "/freights?period=01/02/2020-12/02/2020"
      );
      expect(res.statusCode).toEqual(200);
      expect(res.body.freights).toHaveLength(1);
      expect(res.body.freights[0].origin).toEqual("São Paulo");
    });
  });

  describe("GET /freights/:id", () => {
    it("should return a freight with unique id", async () => {
      const res = await request(app).get(`/freights/${fakeFreight.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.destination).toEqual("Belo Horizonte");
    });

    it("should return a 404 code when a freight not exists", async () => {
      const res = await request(app).get("/freights/100");
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("POST /freights", () => {
    it("should create a new freight", async () => {
      const res = await request(app)
        .post(`/freights`)
        .send({
          origin: "Manaus",
          destination: "Rio de Janeiro",
          latitude_origin: -78.78263763,
          longitude_origin: 100.37627363,
          latitude_destination: 45.73648373,
          longitude_destination: -78.37873653,
          has_load_to_origin: true,
          check_in_date: "2020-02-14 15:20:10",
          truck_id: 2,
          driver_id: 2
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body.destination).toEqual("Rio de Janeiro");
    });
    it("should return error with a required attribute is null", async () => {
      const res = await request(app)
        .post(`/freights`)
        .send({
          origin: "Manaus",
          latitude_origin: -78.78263763,
          longitude_origin: 100.37627363,
          latitude_destination: 45.73648373,
          longitude_destination: -78.37873653,
          has_load_to_origin: true,
          check_in_date: "2020-02-14 15:20:10",
          truck_id: 2,
          driver_id: 2
        });
      expect(res.statusCode).toEqual(412);
      expect(res.body.msg).toEqual(
        "notNull Violation: Freight.destination cannot be null"
      );
    });
  });

  describe("PUT /freights/:id", () => {
    it("should update a freight with PUT method", async () => {
      const res = await request(app)
        .put(`/freights/${fakeFreight.id}`)
        .send({
          destination: "Belo Horizonte Updated"
        });
      expect(res.statusCode).toEqual(204);
    });
    it("should return 404 code when a freight not exist", async () => {
      const res = await request(app).put(`/freights/100`);
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("DELETE /freights/:id", () => {
    it("should delete a freight", async () => {
      const res = await request(app).delete(`/freights/${fakeFreight.id}`);
      expect(res.statusCode).toEqual(204);
    });
    it("should return 404 code when a truck not exist", async () => {
      const res = await request(app).delete(`/freights/100`);
      expect(res.statusCode).toEqual(404);
    });
  });
});
