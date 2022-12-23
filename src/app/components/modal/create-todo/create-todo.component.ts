import {Component} from '@angular/core';

import {Todo} from "../../../core/model/todo/todo";
import {TodoService} from "../../../core/service/todo-service.service";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  newTodo!: Todo;

  constructor(private todoService: TodoService) {
  }

  save() {
    this.todoService.createOne(this.newTodo);
  }
}
