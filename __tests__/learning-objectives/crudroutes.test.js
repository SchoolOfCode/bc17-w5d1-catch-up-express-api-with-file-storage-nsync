import request from 'supertest';
import app from '../../app.js';
import { createServer } from 'http';

let server;

beforeAll((done) => {
  server = createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe('Learning Objective: Implement CRUD routes for recipes', () => {
  describe('Success Criterion: GET /api/recipes', () => {
    it('should return all recipes', async () => {
      const response = await request(app).get('/api/recipes');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.payload)).toBe(true);
    });
  });

  describe('Success Criterion: GET /api/recipes/:id', () => {
    it('should return a recipe by ID', async () => {
      const response = await request(app).get('/api/recipes/4c848d48-b81e-4d6f-b45d-7b3090f4f8ef');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty('id', '4c848d48-b81e-4d6f-b45d-7b3090f4f8ef');
    });

    it('should return 404 if recipe not found', async () => {
      const response = await request(app).get('/api/recipes/nonexistent-id');
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('Success Criterion: POST /api/recipes', () => {
    it('should create a new recipe', async () => {
      const newRecipe = {
        title: 'New Recipe',
        ingredients: ['ingredient1', 'ingredient2'],
        instructions: 'Mix ingredients.',
        image: 'http://example.com/image.jpg',
      };
      const response = await request(app).post('/api/recipes').send(newRecipe);
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty('title', 'New Recipe');
    });
  });

  describe('Success Criterion: PATCH /api/recipes/:id', () => {
    it('should update a recipe by ID', async () => {
      const updatedRecipe = {
        title: 'Updated Recipe',
      };
      const response = await request(app).patch('/api/recipes/4c848d48-b81e-4d6f-b45d-7b3090f4f8ef').send(updatedRecipe);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty('title', 'Updated Recipe');
    });
  });

  describe('Success Criterion: DELETE /api/recipes/:id', () => {
    it('should delete a recipe by ID', async () => {
      const response = await request(app).delete('/api/recipes/4c848d48-b81e-4d6f-b45d-7b3090f4f8ef');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.payload).toHaveProperty('id', '4c848d48-b81e-4d6f-b45d-7b3090f4f8ef');
    });
  });
});