import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('cookies', 'sample cookie recipe', 'https://en.wikipedia.org/wiki/Cookie#/media/File:2ChocolateChipCookies.jpg' )
  ];

  ngOnInit() {
  }

}
