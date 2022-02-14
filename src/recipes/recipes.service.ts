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
    async create(): Promise<Recipe> {
        let testRecipe: Recipe = {
            name: "food",
            totalCookTime: 60,
            description: "desc",
            imageURL: "/img",
            ingredients: [],
            instructions: "a",
            notes: "a"
        }
        const createdCat = new this.recipeModal(testRecipe);
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
}
