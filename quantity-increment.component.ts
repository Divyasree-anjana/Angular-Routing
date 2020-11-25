import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {
  msg:string;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent()  
  {
    this.msg='Click me button is clicked';
      return this.msg;
  }
}
