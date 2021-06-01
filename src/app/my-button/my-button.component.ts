import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('init');
  }

  action() {
    alert('ok');
  }

}
