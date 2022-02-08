import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private dbURL = `https://3000-amytho-recipebook-xkj0be4npum.ws-us30.gitpod.io/recipes`
  constructor(private http: HttpClient) { }

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
}
