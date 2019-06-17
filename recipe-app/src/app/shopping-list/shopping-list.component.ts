import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../models/ingredient.model';
import { Subscription } from 'rxjs';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  @Input() recipeId?: number

  //events
  private ingredientsChangedSub: Subscription

  //properties
  ingredients: Ingredient[]
  ingredientsToDelete: number[]
  ingredientToEdit: number
  allSelected: boolean

  //local refs
  @ViewChild('ingreds', { static: false }) ingredientSelect: MatSelectionList

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.ingredientsChangedSub =
      this.shoppingListService.onIngredientsChanged
        .subscribe((ingredients: Ingredient[]) => {
          this.ingredients = ingredients
        })

    this.allSelected = false
    this.ingredientsToDelete = []
  }

  onSelectAll() {
    this.ingredientSelect.selectAll()
    this.allSelected = !this.allSelected;
  }

  onDeselectAll() {
    this.ingredientSelect.deselectAll()
    this.allSelected = !this.allSelected;
  }

  onDeleteItems() {
    this.ingredientSelect.selectedOptions.selected.map(item => {
      this.ingredientsToDelete.push(+item.value)
    })
    this.shoppingListService.deleteIngredients(this.ingredientsToDelete)
  }

  onEditItems(ingredientId: number) {
    this.ingredientToEdit = ingredientId
    this.ingredientSelect.deselectAll()
  }

  ngOnDestroy() {
    this.ingredientsChangedSub.unsubscribe()
  }

}
