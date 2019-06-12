import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipeId: number;
  recipe: Recipe;
  totalNumRecipes: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.totalNumRecipes = this.recipeService.getTotalNumRecipes() - 1;
    this.recipe = this.recipeService.getRecipe(this.recipeId);
    console.log(this.totalNumRecipes + " " + this.recipeId)
  }

}
