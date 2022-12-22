import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ModalModule} from "ng-bootstrap-ext";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CreateEditTodoComponent} from './components/modal/create-edit-todo/create-edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditTodoComponent
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
