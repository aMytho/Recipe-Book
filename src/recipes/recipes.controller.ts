import { Controller, Get, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './schemas/recipe.schema';

@Controller('recipes')
export class RecipesController {
    constructor(private recipeService: RecipesService) { }

    @Get("/test")
    getTest() {
        return "This is a test"
    }

    @Get("get")
    async getRecipes() {
        let recipe = await this.recipeService.getRecipe();
        console.log(recipe);
        return recipe
    }

    @Get("add")
    async add() {
        await this.recipeService.create();
        return await this.recipeService.getRecipe();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Recipe | null> {
        let recipe = await this.recipeService.getRecipeByName(params.id);
        if (recipe) {
            return recipe;
        }
        return null;
    }
}
