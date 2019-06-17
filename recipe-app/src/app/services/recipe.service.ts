import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class RecipeService {

  //onRecipeChanged = new Subject<Recipe>();

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
  }

  deleteRecipe(recipeId: number) {
    this.recipes.splice(recipeId, 1)
  }

  addIngredientToRecipe(recipeId: number, newIngredient: Ingredient) {
    this.recipes[recipeId].ingredients.push(newIngredient)
  //  this.onRecipeChanged.next(this.recipes[recipeId])
  }

}
