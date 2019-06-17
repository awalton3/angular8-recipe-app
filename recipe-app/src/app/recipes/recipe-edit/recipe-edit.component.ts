import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number
  mode: string
  recipeEditForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    //determine correct mode: edit or new
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      if (!Number.isNaN(this.id))
        this.mode = 'edit'
      else
        this.mode = 'new'
    })
    this.initForm()
  }

  private initForm() {
    let recipeName = ''
    let recipeDescription = ''
    let recipeImagePath = ''

    if (this.mode === 'edit') {
      let recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name
      recipeDescription = recipe.description
      recipeImagePath = recipe.imageUrl
    }

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(recipeName),
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(recipeImagePath)
    })
  }

  onSubmitRecipeForm() {
    console.log(this.recipeEditForm)
  }

}
