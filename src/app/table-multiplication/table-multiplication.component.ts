import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.component.html',
  styleUrls: ['./table-multiplication.component.scss']
})
export class TableMultiplicationComponent implements OnInit {
  nb: number = 5;
  keys: number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
