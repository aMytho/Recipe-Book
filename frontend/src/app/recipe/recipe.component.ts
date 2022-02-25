import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe | undefined
  data:any | undefined;
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(): void {
  }

  setCurrentRecipe() {
    this.recipeService.currentRecipe = this.recipe;
  }
}
