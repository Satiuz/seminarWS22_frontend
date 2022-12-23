import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Todo} from "./core/model/todo/todo";
import {TodoService} from "./core/service/todo-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos!: Todo[];

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) {
    router.events.subscribe(() => {
      this.getAllTodos();
    });
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  delete(id: string, index: number) {
    this.todoService.deleteOne(id).subscribe(() => {
      this.todos.splice(index, 1);
    });
  }

  private getAllTodos() {
    this.todoService.getAll().subscribe((res) => {
      this.todos = res;
    });
  }
}
