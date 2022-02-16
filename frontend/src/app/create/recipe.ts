export class Recipe {
    constructor(
        public name: string,
        public totalCookTime: number,
        public description: string,
        public ingredients: string,
        public instructions: string,
        public imageURL?: string,
        public notes?: string,
    ) {}
}