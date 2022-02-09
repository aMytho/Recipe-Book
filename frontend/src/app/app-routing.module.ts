import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: "recipe", component: RecipeComponent
  },
  {
    path: "table", component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
