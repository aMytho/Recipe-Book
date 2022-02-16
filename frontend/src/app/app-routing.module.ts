import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: "recipe", component: RecipeComponent
  },
  {
    path: "table", component: TableComponent
  },
  {
    path: "list", component: RecipeListComponent
  },
  {
    path: "create", component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
