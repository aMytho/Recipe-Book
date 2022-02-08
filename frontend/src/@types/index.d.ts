interface Recipe {
    name: string;

    totalCookTime: number;

    description: string;

    ingredients: Ingredient[];

    instructions: string;

    imageURL: string;

    notes: string;
}

type Ingredient = {
    /**
     * The name of the ingredient
     */
    name: string;
    /**
     * The amount of the ingredient. 
     */
    amount: string;
}