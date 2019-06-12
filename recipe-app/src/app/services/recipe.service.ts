import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({providedIn: 'root'})

export class RecipeService {
  private recipes: Recipe[] = []

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(recipeId: number) {
    return this.recipes[recipeId]
  }

  getTotalNumRecipes() {
    return this.recipes.length
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    console.log("Updated Recipes List: " + this.recipes)
  }

  deleteRecipe(recipeId: number) {
    this.recipes.splice(recipeId, 1)
    console.log("Updated Recipes List: " + this.recipes)
  }

}
