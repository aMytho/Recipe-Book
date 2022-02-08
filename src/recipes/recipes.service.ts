import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipesService {
    constructor(@InjectModel(Recipe.name) private recipeModal: Model<RecipeDocument>) {

    }

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

    getRecipeByName(name: string): Promise<Recipe | null> {
        return new Promise(resolve => {
            console.log(`Searching for ${name}`);
            this.recipeModal.findOne({ name: name }, {}, {}, function (err, recipe) {
                console.log(recipe);
                if (err || !recipe) {
                    resolve(null);
                    return;
                }
                if (recipe) {
                    resolve(recipe);
                    console.log(`Found ${recipe.name}`);
                }
            })
        })
    }

    getAllRecipes() {
        return new Promise(resolve => {
            this.recipeModal.find((err, result) => {
                console.log(result);
                resolve(result)
            })
        })
    }
}
