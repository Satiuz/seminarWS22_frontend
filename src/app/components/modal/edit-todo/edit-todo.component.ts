import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from '@angular/core';

import {ToastService} from "ng-bootstrap-ext";
import {Todo} from "../../../core/model/todo/todo";
import {TodoService} from "../../../core/service/todo-service.service";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  currentTodo!: Todo;
  private id!: string;

  constructor(private route: ActivatedRoute,
              private todoService: TodoService,
              private toastService: ToastService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getTodo();
    });
  }

  save() {
    this.todoService.updateOne(this.id, this.currentTodo).subscribe(() => {
      this.toastService.success('Todo', 'Successfully updated Todo')
    }, (error) => {
      this.toastService.error('Todo', 'Failed to update Todo')
    });
  }

  private getTodo() {
    this.todoService.getOne(this.id).subscribe((res) => {
      this.currentTodo = res;
    });
  }
}
