import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe | any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  // Sets it equal to whatever the current recipe is
  // Sets it equal to whatever the current recipe is
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params["recipe"]) {
        this.recipeService.getRecipe(params["recipe"]).then(recipe => {
          this.recipe = recipe;
        })
      } else {
        this.recipe = this.recipeService.currentRecipe;
      }
    });
  }
}
