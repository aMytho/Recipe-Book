import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './schemas/recipe.schema';

@Controller('recipes')
export class RecipesController {
    constructor(private recipeService: RecipesService) { }

    /**
     * Returns all recipes
     */
    @Get("all")
    async getRecipes() {
        let recipe = await this.recipeService.getAllRecipes();
        console.log(recipe);
        return recipe
    }


    @Delete(":name")
    async delete(@Param() params) {
        console.log(`Deleting ${params.name}`);
        return await this.recipeService.deleteRecipeByName(params.name.toLowerCase());
    }

    @Put("")
    async update(@Body() recipeInfo: Recipe) {
        console.log(`Updating ${recipeInfo.name}`);
        return await this.recipeService.updateRecipe(recipeInfo);
    }

    @Post()
    async createRecipe(@Body() recipeInfo: Recipe) {
        console.log(`Creating ${recipeInfo.name}`);
        return await this.recipeService.create(recipeInfo);
    }

    /**
     * Returns a specific recipe by name (/hamburger, /lettuce, etc)
     */
    @Get(':name')
    async findOne(@Param() params): Promise<Recipe | null> {
        let recipe = await this.recipeService.getRecipeByName(params.name);
        if (recipe) {
            return recipe;
        }
        return null;
    }
}
