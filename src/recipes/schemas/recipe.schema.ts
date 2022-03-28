import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  /**
   * The name of the recipe
   */
  @Prop({ required: true })
  name: string;

  /**
   * The total cook time of the recipe. Includes everything (preparation, oven, etc)
   */
  @Prop({ required: true })
  totalCookTime: number;

  /**
   * A short description of the recipe
   */
  @Prop({ required: false })
  description: string;

  /**
   * The items required to make the recipe
   */
  @Prop({ required: false })
  ingredients: string;

  /**
   * Insturctions on how to make the recipe
   */
  @Prop({ required: false })
  instructions: string;

  /**
   * The path to the image of the recipe
   */
  @Prop({ required: false })
  imageURL: string;

  /**
   * Any additional information about the recipe
   */
  @Prop({ required: false })
  notes: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
