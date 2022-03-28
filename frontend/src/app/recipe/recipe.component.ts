import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  @Input()
  recipe: Recipe | undefined;
  data:any | undefined;
  constructor(
    private recipeService: RecipeService,
    private navigate: Router
    ) { }

  setCurrentRecipe() {
    this.recipeService.currentRecipe = this.recipe;
  }

  editRecipe() {
    this.recipeService.currentRecipe = this.recipe;
    this.navigate.navigateByUrl("/edit");
  }
}
