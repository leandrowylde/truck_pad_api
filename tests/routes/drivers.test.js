const request = require("supertest");
const app = require("../../index");
const Driver = app.db.models.Driver;

describe("Routes: Drivers", () => {
  describe("GET /drivers", () => {
    it("should return a list of 3 drivers", async () => {
      const res = await request(app).get("/drivers");
      expect(res.statusCode).toEqual(200);
      expect(res.body.drivers).toHaveLength(3);
      expect(res.body.count).toEqual(3);
    });
    it("should return a list of drivers when driver has your own vehicle", async () => {
      const res = await request(app).get("/drivers?has_own_vehicle=true");
      expect(res.statusCode).toEqual(200);
      expect(res.body.drivers).toHaveLength(2);
      expect(res.body.count).toEqual(2);
    });
  });

  describe("GET /drivers/:id", () => {
    it("should return a driver with unique id", async () => {
      const res = await request(app).get(`/drivers/1`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toEqual("Test Driver");
    });

    it("should return a 404 code when a driver not exists", async () => {
      const res = await request(app).get("/drivers/100");
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("POST /drivers", () => {
    it("should create a new driver", async () => {
      const res = await request(app)
        .post(`/drivers`)
        .send({
          name: "Test Driver 4",
          age: "30",
          gender: "M",
          has_own_vehicle: false,
          cnh_type: "D"
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body.name).toEqual("Test Driver 4");
    });
    it("should return error with a required attribute is null", async () => {
      const res = await request(app)
        .post(`/drivers`)
        .send({
          age: "30",
          gender: "M",
          has_own_vehicle: false,
          cnh_type: "D"
        });
      expect(res.statusCode).toEqual(412);
      expect(res.body.msg).toEqual(
        "notNull Violation: Driver.name cannot be null"
      );
    });
  });

  describe("PUT /drivers/:id", () => {
    it("should update a driver with PUT method", async () => {
      const res = await request(app)
        .put(`/drivers/1`)
        .send({
          name: "Driver Updated",
          cnh_type: "D"
        });
      expect(res.statusCode).toEqual(204);
    });
    it("should return 404 code when a driver not exist", async () => {
      const res = await request(app).put(`/drivers/100`);
      expect(res.statusCode).toEqual(404);
    });
  });

  describe("DELETE /drivers/:id", () => {
    it("should delete a driver", async () => {
      const res = await request(app).delete(`/drivers/1`);
      expect(res.statusCode).toEqual(204);
    });
    it("should return 404 code when a driver not exist", async () => {
      const res = await request(app).delete(`/drivers/100`);
      expect(res.statusCode).toEqual(404);
    });
  });
});
