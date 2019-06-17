import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({providedIn: 'root'})

export class ShoppingListService {

  onIngredientsChanged = new Subject<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('chicken', 1),
    new Ingredient('apples', 5),
    new Ingredient('taco shells', 5),
    new Ingredient('sour cream', 1)
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  getIngredient(ingredientId: number) {
    return this.ingredients[ingredientId]
  }

  addIngredient(name: string, quantity: number) {
    this.ingredients.push(new Ingredient(name, quantity))
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredientsToAdd: Ingredient[]) {
    this.ingredients.push(...ingredientsToAdd)
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  editIngredient(ingredientId: number, newName: string, newQuantity: number) {
    this.ingredients[ingredientId].name = newName
    this.ingredients[ingredientId].quantity = newQuantity
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(ingredientId: number) {
    this.ingredients.splice(ingredientId, 1)
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredients(ingredientsToDelete: number[]) {
    ingredientsToDelete.map((ingredientId, index) => {
      if(index !== 0) {
        let i = ingredientsToDelete[index] - index;
        this.ingredients.splice(i, 1)
      } else {
        this.ingredients.splice(ingredientId, 1)
      }
    })
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  clearIngredients() {
    this.ingredients = []
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

}
