import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await getRecipes();
    res.json({ success: true, payload: recipes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipe = await getRecipeByID(req.params.id);
    if (recipe) {
      res.json({ success: true, payload: recipe });
    } else {
      res.status(404).json({ success: false, message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/recipes', async (req, res) => {
  try {
    const newRecipe = await createRecipe(req.body);
    res.status(201).json({ success: true, payload: newRecipe });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.patch('/api/recipes/:id', async (req, res) => {
  try {
    const updatedRecipe = await updateRecipeByID(req.params.id, req.body);
    if (updatedRecipe) {
      res.json({ success: true, payload: updatedRecipe });
    } else {
      res.status(404).json({ success: false, message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.delete('/api/recipes/:id', async (req, res) => {
  try {
    const deletedRecipe = await deleteRecipeByID(req.params.id);
    if (deletedRecipe) {
      res.json({ success: true, payload: deletedRecipe });
    } else {
      res.status(404).json({ success: false, message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;