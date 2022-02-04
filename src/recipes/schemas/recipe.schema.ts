import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ingredient } from './recipe.entity';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    totalCookTime: number;

    @Prop({ required: false })
    description: string;

    @Prop({ required: false })
    ingredients: Ingredient[];

    @Prop({ required: false })
    instructions: string;

    @Prop({required: false})
    imageURL: string;

    @Prop({required: false})
    notes: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);