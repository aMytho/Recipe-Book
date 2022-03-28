import { Controller, Get, Redirect } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Redirect("/recipes/list", 302)
  redirect() {
    console.log("Redirecting to recipe list");
  }
}
