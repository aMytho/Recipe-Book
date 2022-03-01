import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from './recipe';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  model = new Recipe("Default", 30, "Description here", "food", "Instructions", "IMG", "notes");

  submitted = false;

  onSubmit(recipe: globalThis.Recipe) {
    this.submitted = true;
    recipe.name = recipe.name.trim();
    this.recipeService.createRecipe(recipe);
  }

  newRecipe() {
    this.model = new Recipe("Default", 77, 'Description here', "food", "Instructions", "URL", "notes");
  }

  setCurrentRecipe() {
    this.recipeService.currentRecipe = this.model as globalThis.Recipe;
  }
}
