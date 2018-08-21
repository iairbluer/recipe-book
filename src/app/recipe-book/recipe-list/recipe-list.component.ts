import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() detail = new EventEmitter<Recipe>();
  constructor() { }

  recipes: Recipe[] = [
    new Recipe('cookies', 'sample cookie recipe', 'https://www.johndpotts.com/profile-pic.png' ),
    new Recipe('pie', 'yummy pie', 'https://www.johndpotts.com/profile-pic.png'),
    new Recipe('bread', 'loaf of bread', 'https://www.johndpotts.com/profile-pic.png')
  ];

  handle = function($event) {
    this.detail.emit($event);
  };

  ngOnInit() {
  }

}
