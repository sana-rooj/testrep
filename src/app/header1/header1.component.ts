import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  public greeting = '';
  public counter = 0;
  constructor() { }

  ngOnInit() {
  }
   onclick() {
    if (this.counter === 0) {
    this.greeting = 'here is an event you have trigerred ';
    this.counter++;
    } else {
    this.greeting = 'here is an event you have trigerred ' + this.counter;
    this.counter++;
    }
   }
}
