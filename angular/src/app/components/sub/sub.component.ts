import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public color : string;

  constructor() { }

  ngOnInit() {
  }

  public clickHandler(inputColor : string): void {
    this.color = inputColor;
  }

}
