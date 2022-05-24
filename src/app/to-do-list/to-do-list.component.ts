import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos: any[];
  filteredTodos: any[];
  constructor() {
    this.todos = [];
    this.filteredTodos = [];
  }

  ngOnInit(): void {
  }

  add(event:any){
    if(!event.value) return;
    this.todos.push({id: this.todos.length, name: event.value})
    this.filteredTodos = this.todos;
    event.value= "";
  }

  delete(id:number){
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.filteredTodos = this.todos;
  }

  like(str:string){
    this.filteredTodos = this.todos.filter(todo => todo.name.includes(str));
  }
}
