import { Controller, Get, Param } from '@nestjs/common';
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

    /**
     * Adds a default recipe
     */
    @Get("add")
    async add() {
        await this.recipeService.create();
        return await this.recipeService.getRecipeByName("test");
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
