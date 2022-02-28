import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe | any;
  constructor(
    private recipeService: RecipeService
  ) { }

  // Sets it equal to whatever the current recipe is
  ngOnInit(): void {
    this.recipe = this.recipeService.currentRecipe;
  }

}
