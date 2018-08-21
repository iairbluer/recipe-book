import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() detail = new EventEmitter<Recipe>();
  @Input() recipe: object;


seeDetail = function(){
  this.detail.emit(this.recipe);
};

  constructor() { }

  ngOnInit() {
  }

}
