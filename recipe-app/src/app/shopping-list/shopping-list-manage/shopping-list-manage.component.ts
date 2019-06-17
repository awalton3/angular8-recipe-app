import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-shopping-list-manage',
  templateUrl: './shopping-list-manage.component.html',
  styleUrls: ['./shopping-list-manage.component.css']
})
export class ShoppingListManageComponent implements OnInit, OnChanges {

  @Input() ingredientIdToEdit?: number
  @Input() parent: string
  @Input() recipeIdToEdit?: number
  @ViewChild('f', { static: false }) slForm: NgForm
  isEditMode: boolean = false

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.parent === 'shopping-list') {
      if (Number.isInteger(changes.ingredientIdToEdit.currentValue)) {
        let ingredientToEdit: Ingredient = this.shoppingListService.getIngredient(changes.ingredientIdToEdit.currentValue)
        this.slForm.setValue({
          name: ingredientToEdit.name,
          quantity: ingredientToEdit.quantity
        })
        this.isEditMode = !this.isEditMode;
      }
    }
  }

  onSubmit() {
    if (this.parent === 'shopping-list')
      this.submitToShoppingList()
    else
      this.submitToRecipe()

    this.slForm.resetForm()
  }

  submitToShoppingList() {
    console.log("adding an ingredient to shopping")
    if (!this.isEditMode) {
      this.shoppingListService.addIngredient(this.slForm.value.name, this.slForm.value.quantity)
    } else {
      this.shoppingListService.editIngredient(this.ingredientIdToEdit, this.slForm.value.name, this.slForm.value.quantity)
    }
  }

  submitToRecipe() {
    console.log("adding an ingredient to an existing recipe")
    let newIngredient = new Ingredient(this.slForm.value.name, this.slForm.value.quantity)
    this.recipeService.addIngredientToRecipe(this.recipeIdToEdit, newIngredient)
  }
}
