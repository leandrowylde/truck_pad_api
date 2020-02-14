const request = require("supertest");
const app = require("../../index");
const Truck = app.db.models.Truck;
let fakeTruck;

describe("Routes: Trucks", () => {
  describe("GET /trucks", () => {
    it("should return a list of 3 trucks", async () => {
      const res = await request(app).get("/trucks");
      expect(res.statusCode).toEqual(200);
      expect(res.body.trucks).toHaveLength(3);
      expect(res.body.count).toEqual(3);
    });
  });

  describe("GET /trucks/:id", () => {
    it("should return a truck with unique id", async () => {
      const res = await request(app).get(`/trucks/1`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.plate).toEqual("HGF-9746");
    });

    it("should return a 404 code when a truck not exists", async () => {
      const res = await request(app).get("/trucks/100");
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("POST /trucks", () => {
    it("should create a new truck", async () => {
      const res = await request(app)
        .post(`/trucks`)
        .send({
          plate: "KIU-6743",
          model: "Truck model 4",
          brand: "Truck brand 4",
          truck_type_id: 1
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body.model).toEqual("Truck model 4");
    });
    it("should return error with a required attribute is null", async () => {
      const res = await request(app)
        .post(`/trucks`)
        .send({
          model: "Truck model 4",
          brand: "Truck brand 4",
          truck_type_id: 1
        });
      expect(res.statusCode).toEqual(412);
      expect(res.body.msg).toEqual(
        "notNull Violation: Truck.plate cannot be null"
      );
    });
  });

  describe("PUT /trucks/:id", () => {
    it("should update a truck with PUT method", async () => {
      const res = await request(app)
        .put(`/trucks/1`)
        .send({
          model: "Truck model Updated"
        });
      expect(res.statusCode).toEqual(204);
    });
    it("should return 404 code when a driver not exist", async () => {
      const res = await request(app).put(`/trucks/100`);
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("DELETE /trucks/:id", () => {
    it("should delete a truck", async () => {
      const res = await request(app).delete(`/trucks/1`);
      expect(res.statusCode).toEqual(204);
    });
    it("should return 404 code when a truck not exist", async () => {
      const res = await request(app).delete(`/trucks/100`);
      expect(res.statusCode).toEqual(404);
    });
  });
});
