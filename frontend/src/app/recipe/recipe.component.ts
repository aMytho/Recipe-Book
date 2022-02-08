import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  data:any | undefined;
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(): void {
    this.recipeService.getRecipe("example").then(data => {
      alert(data);
      this.data = data;
    })
    
  }

  

}
