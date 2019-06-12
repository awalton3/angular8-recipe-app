import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]
  recipe1 = new Recipe (
    "All Beef Juicy Hamburger",
    "This is a hambuger recipe.",
    "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg",
    [ new Ingredient ('onions', 2), new Ingredient ('tomatos', 2), new Ingredient ('american cheese', 1), new Ingredient ('buns', 2), new Ingredient ('beef patty', 1) ]
  )
  recipe2 = new Recipe (
    "Sweet Sauce Pizza",
    "This is a pizza recipe.",
    "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/03/55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg",
    [ new Ingredient ('onions', 2), new Ingredient ('tomatos', 2), new Ingredient ('american cheese', 1), new Ingredient ('buns', 2), new Ingredient ('beef patty', 1) ]
  )
  recipe3 = new Recipe (
    "Fresh Chicken Tacos",
    'This is a taco recipe',
    "https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-1-2.jpg",
    [ new Ingredient ('head of lettuce', 1), new Ingredient ('tomatos', 2), new Ingredient ('shredded cheese', 1), new Ingredient ('taco soft shells', 24), new Ingredient ('chicken breast', 1) ]
  )

  constructor(
    private recipeService: RecipeService,
    private route : ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //create a fake list of recipes
    this.recipeService.addRecipe(this.recipe1)
    this.recipeService.addRecipe(this.recipe2)
    this.recipeService.addRecipe(this.recipe3)
    this.recipes = this.recipeService.getRecipes()
  }

  onRecipeClick(recipeId: any) {
    this.router.navigate([recipeId], {relativeTo: this.route})
  }
}
