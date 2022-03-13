import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private dbURL = `https://3000-amytho-recipebook-6rjdoz238z6.ws-us34.gitpod.io/recipes`;
  currentRecipe: Recipe | undefined;
  constructor() { }

  async getRecipe(name:string) {
    let request = await fetch(`${this.dbURL}/${name}`);
    let result = await request.json();
    console.log(result)
    return result;
  }

  async getAllRecipes() {
    let request = await fetch(`${this.dbURL}/all`);
    let result = await request.json();
    console.log(result)
    return result;
  }

  async deleteRecipe(recipe: string) {
    let request = await fetch(`${this.dbURL}/${recipe.trim()}`, {
      method: "DELETE"
    });
    let result = await request.json();
    console.log(result);
    return result;
  }

  async deleteManyRecipes(recipes: string[]) {
    let deleteCount = 0;
    for (let i = 0; i < recipes.length;i++) {
      let deleted = await this.deleteRecipe(recipes[i]);
      if (deleted) deleteCount++;
    }
    return deleteCount;
  }

  async createRecipe(recipe: Recipe) {
    fetch(`${this.dbURL}`, {
      method: "POST",
      headers: [
        ['Content-Type', 'application/json']
      ],
      body: JSON.stringify(recipe)
    })
  }

  async editRecipe(recipe: Recipe) {
    fetch(`${this.dbURL}`, {
      method: "PUT",
      headers: [
        ['Content-Type', 'application/json']
      ],
      body: JSON.stringify(recipe)
    }).catch(err => {
      alert(err)
    })
  }
}
