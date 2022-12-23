import {Component} from '@angular/core';

import {ToastService} from "ng-bootstrap-ext";
import {Todo} from "../../../core/model/todo/todo";
import {TodoService} from "../../../core/service/todo-service.service";
import {CreateTodoDto} from "../../../core/model/todo/dto/create-todo.dto";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  newTodo: CreateTodoDto = {
    creator: '',
    content: '',
  };

  constructor(private todoService: TodoService,
              private toastService: ToastService) {
  }

  save() {
    this.todoService.createOne(this.newTodo).subscribe(() => {
      this.toastService.success('Todo', 'Successfully created Todo')
    }, (error) => {
      this.toastService.error('Todo', 'Failed to create Todo')
    });
  }
}
