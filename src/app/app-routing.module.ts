import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateEditTodoComponent} from "./components/modal/create-edit-todo/create-edit-todo.component";

const routes: Routes = [
  {
    path: 'create',
    component: CreateEditTodoComponent
  },
  {
    path: 'edit/:id',
    component: CreateEditTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
