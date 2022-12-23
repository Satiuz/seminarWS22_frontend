import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ModalModule} from "ng-bootstrap-ext";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EditTodoComponent} from './components/modal/edit-todo/edit-todo.component';
import { CreateTodoComponent } from './components/modal/create-todo/create-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    EditTodoComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
