import { Component } from '@angular/core';
import { Recipe } from '../create/recipe';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  model: Recipe
  constructor(private recipeService: RecipeService) {
    this.model = this.recipeService.currentRecipe as Recipe;
  }

  submitted = false;

  onSubmit(recipe: globalThis.Recipe) {
    this.submitted = true;
    recipe.name = this.model.name;
    this.recipeService.editRecipe(recipe);
  }

  newRecipe() {
    this.model = new Recipe("", 0, "", "", "", "", "");
  }

  setCurrentRecipe() {
    this.recipeService.currentRecipe = this.model as globalThis.Recipe;
  }
}