const app = require("./app");
const request = require("supertest");

describe("App tests", () => {
  test("GET /", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.info).toBeDefined();
    expect(res.body.info).toBe("Journal API");
  });

  test("GET /categories", async () => {
    const res = await request(app).get("/categories");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/i);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(4);
    expect(res.body[0]).toMatch(/food/i);
  });

  test("Create a new entry", async () => {
    const res = await request(app).post("/api/v1/entries").send({
      category: "Other",
      entry: "Test Entry",
    });

    expect(res.status).toBe(201);
    expect(res.headers["content-type"]).toMatch(/json/i);
    expect(res.body._id).toBeDefined();
    expect(res.body.category).toBe("Other");
    expect(res.body.entry).toBe("Test Entry");
  });
});
