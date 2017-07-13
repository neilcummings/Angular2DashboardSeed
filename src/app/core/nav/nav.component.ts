import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isIn = false;

  toggleState() {
    this.isIn = !this.isIn
  }

  constructor() { }

  ngOnInit() {
  }

}
