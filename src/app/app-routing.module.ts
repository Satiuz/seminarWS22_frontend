import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EditTodoComponent} from "./components/modal/edit-todo/edit-todo.component";
import {CreateTodoComponent} from "./components/modal/create-todo/create-todo.component";

const routes: Routes = [
  {
    path: 'create',
    component: CreateTodoComponent
  },
  {
    path: 'edit/:id',
    component: EditTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
