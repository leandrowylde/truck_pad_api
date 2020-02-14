const request = require("supertest");
const app = require("../../index");

describe("Routes: Index", () => {
  describe("GET /", () => {
    it("should return api status OK", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("api_status");
    });
  });
});
