import request from "supertest";
import app from "../../app.js";
import { createServer } from "http";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let server;

beforeAll((done) => {
  server = createServer(app);
  server.listen(3001, done);
}, 10000);

afterAll((done) => {
  server.close(done);
});

describe("Learning Objective: Implement CRUD routes for recipes", () => {
  let recipeId;

  beforeAll(() => {
    const data = fs.readFileSync(path.join(__dirname, "../../recipes.json"));
    const recipes = JSON.parse(data);
    if (recipes.length > 0) {
      recipeId = recipes[0].id;
    }
  });

  describe("Success Criterion: GET /api/recipes", () => {
    it("should return all recipes", async () => {
      const response = await request(app).get("/api/recipes");
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.payload)).toBe(true);
    });
  });

  describe("Success Criterion: GET /api/recipes/:id", () => {
    it("should return a recipe by ID", async () => {
      const response = await request(app).get(`/api/recipes/${recipeId}`);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty("id", recipeId);
    });

    it("should return 404 if recipe not found", async () => {
      const response = await request(app).get("/api/recipes/nonexistent-id");
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe("Success Criterion: POST /api/recipes", () => {
    it("should create a new recipe", async () => {
      const newRecipeId = uuidv4();
      const newRecipe = {
        id: newRecipeId,
        title: "Test Recipe",
        ingredients: ["ingredient1", "ingredient2"],
        instructions: "Test instructions",
        image: "http://example.com/image.jpg",
      };

      // Create a new recipe
      const response = await request(app).post("/api/recipes").send(newRecipe);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty("id", newRecipeId);
    });
  });

  describe("Success Criterion: PATCH /api/recipes/:id", () => {
    it("should update a recipe by ID", async () => {
      const updatedRecipe = {
        title: "Updated Recipe",
      };
      const response = await request(app)
        .patch(`/api/recipes/${recipeId}`)
        .send(updatedRecipe);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty("title", "Updated Recipe");
    });
  });

  describe("Success Criterion: DELETE /api/recipes/:id", () => {
    it("should delete a recipe by ID", async () => {
      const response = await request(app).delete(`/api/recipes/${recipeId}`);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty("id", recipeId);
    });
  });
});
