import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource:any
  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().then((data:Recipe[]) => {
      this.dataSource = data.map((element: Recipe) => {
        return {name: element.name, totalCookTime: element.totalCookTime, description: element.description, ingredients: element.ingredients}
      });
    })
  }

  columns = [
    {
      columnDef: 'name',
      header: 'Name.',
      cell: (recipe: Recipe) => `${recipe.name}`,
    },
    {
      columnDef: 'cook time',
      header: 'Cook Time',
      cell: (recipe: Recipe) => `${recipe.totalCookTime}`,
    },
    {
      columnDef: 'description',
      header: 'Decription',
      cell: (recipe: Recipe) => `${recipe.description}`
    },
    {
      columnDef: 'ingredients',
      header: 'Ingredients',
      cell: (recipe: Recipe) => `${recipe.ingredients}`
    }
  ];
  displayedColumns = this.columns.map(c => c.columnDef);
}