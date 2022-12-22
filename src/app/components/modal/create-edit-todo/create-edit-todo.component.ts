import { Component } from '@angular/core';

@Component({
  selector: 'app-create-edit-todo',
  templateUrl: './create-edit-todo.component.html',
  styleUrls: ['./create-edit-todo.component.scss']
})
export class CreateEditTodoComponent {

  save() {
    console.log('Hello there');
  }
}
