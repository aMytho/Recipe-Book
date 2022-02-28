import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe | undefined
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      alert(params["recipe"]);
      // @ts-ignore
      this.recipeService.getRecipe().then(recipe => {
        this.recipe = recipe;
      })
    });
  }

}
