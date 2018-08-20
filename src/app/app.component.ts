import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeSelected = true;

  navigateLists = function($event) {
    $event.selection === 'recipes'
      ? (this.recipeSelected = true)
      : (this.recipeSelected = false);
  };
}
