import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { RecipesModule } from "./recipes/recipes.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/nest"), RecipesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
