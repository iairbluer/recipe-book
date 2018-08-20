import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() navigationAction = new EventEmitter<{selection: string}>();
  fireNavigationAction = function(navChoice: string) {
    this.navigationAction.emit({
      selection: navChoice
    });
  };

  constructor() { }

  ngOnInit() {
  }

}
