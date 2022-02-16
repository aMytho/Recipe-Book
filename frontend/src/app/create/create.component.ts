import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Recipe("Default", 30, "Description here", "food", "Instructions", "IMG", "notes");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newRecipe() {
    this.model = new Recipe("Default", 77, 'Description here', "food", "Instructions", "URL", "notes");
  }
}
