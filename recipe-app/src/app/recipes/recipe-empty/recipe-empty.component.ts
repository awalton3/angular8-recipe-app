import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-empty',
  templateUrl: './recipe-empty.component.html',
  styleUrls: ['./recipe-empty.component.css']
})
export class RecipeEmptyComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

  }

}
