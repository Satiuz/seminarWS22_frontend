import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ModalModule, ToastModule} from "ng-bootstrap-ext";
import {EditTodoComponent} from './components/modal/edit-todo/edit-todo.component';
import {CreateTodoComponent} from './components/modal/create-todo/create-todo.component';
import {FormsModule} from "@angular/forms";

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
    ToastModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
