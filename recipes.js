import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// Helper function to read the file
async function readFile() {
  const data = await fs.readFile(fileName, "utf-8");
  return JSON.parse(data);
}

// Helper function to write to the file
async function writeFile(data) {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

// GET ALL RECIPES
export async function getRecipes() {
  const recipes = await readFile();
  return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
  const recipes = await readFile();
  const recipe = recipes.find((recipe) => recipe.id === id);
  return recipe;
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  const recipes = await readFile();
  const recipe = { id: uuidv4(), ...newRecipe };
  recipes.push(recipe);
  await writeFile(recipes);
  return recipe;
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {
  const recipes = await readFile();
  const index = recipes.findIndex((recipe) => recipe.id === id);
  if (index !== -1) {
    recipes[index] = { ...recipes[index], ...updatedRecipe };
    await writeFile(recipes);
    return recipes[index];
  }
  return null;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  const recipes = await readFile();
  const index = recipes.findIndex((recipe) => recipe.id === id);
  if (index !== -1) {
    const deletedRecipe = recipes.splice(index, 1);
    await writeFile(recipes);
    return deletedRecipe[0];
  }
  return null;
}
