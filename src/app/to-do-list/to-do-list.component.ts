import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface TodoList {
  checked: boolean;
  value: string;
}

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @ViewChild('todo') todo!: ElementRef;
  todoList: TodoList[] = [];
  couleur: boolean = true;

  constructor() { }


  changeColor() {
    this.couleur = !this.couleur;
  }
  ngOnInit(): void {
  }

  lineTrough(todo: TodoList): void {
    todo.checked = !todo.checked;
  }

  add(): void {
    this.todoList.push({
      checked: false,
      value: this.todo.nativeElement.value
    });
    this.todo.nativeElement.value = '';
  }

}
