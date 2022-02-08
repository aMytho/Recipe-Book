import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  dbURL = `https://3000-amytho-recipebook-xkj0be4npum.ws-us30.gitpod.io/recipes/get`
  constructor(private http: HttpClient) { }

  async getRecipe(name:string) {
    let request = await fetch(this.dbURL);
    let result = await request.json();
    console.log(result)
    alert(result[0].name);
    return result;
  }
}
