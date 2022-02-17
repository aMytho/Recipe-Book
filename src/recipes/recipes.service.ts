import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipesService {
    constructor(@InjectModel(Recipe.name) private recipeModal: Model<RecipeDocument>) {

    }

    /**
     * Creates and returns a defualt recipe. Just a template, will replace later
     */
    async create(recipe: Recipe): Promise<Recipe> {
        recipe.imageURL = "URL";
        recipe.ingredients= [];
        const createdCat = new this.recipeModal(recipe);
        return createdCat.save();
    }

    /**
     * Returns a recipe by name. Null if not found
     * @param name The name of the recipe
     */
    getRecipeByName(name: string): Promise<Recipe | null> {
        return new Promise(resolve => {
            console.log(`Searching for ${name}`);
            // Search for the recipe by the name passed in
            this.recipeModal.findOne({ name: name }, {}, {}, function (err, recipe) {
                console.log(recipe);
                // If error or no recipe was found return null
                if (err || !recipe) {
                    resolve(null);
                    return;
                }
                // A recipe was found! Returning it to the user
                if (recipe) {
                    resolve(recipe);
                    console.log(`Found ${recipe.name}`);
                }
            })
        })
    }

    /**
     * Return all recipes
     */
    getAllRecipes(): Promise<Recipe[]> {
        return new Promise(resolve => {
            // Finds all recipes
            this.recipeModal.find((err, result) => {
                console.log(result);
                resolve(result)
            })
        })
    }


    /**
     * Removes a recipe by name and returns it
     * @param recipe The recipe to remove
     */
    deleteRecipeByName(recipe: string): Promise<null | boolean> {
        return new Promise(resolve => {
            this.recipeModal.findOneAndDelete({name: recipe}, {}, (err, doc) => {
                console.log(`Deleting ${doc.name}`);
                if (err) {
                    resolve(null);
                    return
                }
                if (doc) {
                    resolve(true);
                    return
                }
                resolve(true);
                return
            })
        })
    }

    deleteRecipesByName(recipes: string[]) {
        return new Promise(resolve => {
            this.recipeModal.deleteMany({}, {}, (err) => {
                
            })
        })
    }
}
