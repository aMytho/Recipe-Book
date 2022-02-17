import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
        return await this.recipeService.deleteRecipeByName(params.name);
    }

    @Post()
    async createRecipe(@Body() recipeInfo: Recipe) {
        console.log(recipeInfo, 123)
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
