import {Component, OnInit} from '@angular/core';

import {Todo} from "./core/model/todo/todo";
import {TodoService} from "./core/service/todo-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos!: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  private getAllTodos() {
    this.todoService.getAll().subscribe((res) => {
      this.todos = res;
    });
  }
}
