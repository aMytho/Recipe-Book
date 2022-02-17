import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  deleteRecipe(recipe: string) {
    console.log(recipe);
    this.recipeService.deleteRecipe(recipe).then(response => {
      if (response == false) {
        alert("No recipe was found with that name");
      } else if (response == true) {
        alert("Recipe Deleted");
      }
    })
  }

  async deleteManyRecipes(input: string) {
    let recipes = input.split(" ");
    this.recipeService.deleteManyRecipes(recipes);
  }
}
