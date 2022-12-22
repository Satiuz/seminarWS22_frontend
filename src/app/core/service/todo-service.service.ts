import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Todo} from "../model/todo/todo";
import {environment} from "../../../environments/environment";
import {CreateTodoDto} from "../model/todo/dto/create-todo.dto";
import {UpdateTodoDto} from "../model/todo/dto/update-todo.dto";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  createOne(dto: CreateTodoDto): Observable<Todo> {
    return this.httpClient.post<Todo>(`${environment.baseUrl}/todo`, dto);
  }

  getOne(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(`${environment.baseUrl}/todo/${id}`);
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${environment.baseUrl}/todo`);
  }

  updateOne(id: string, dto: UpdateTodoDto): Observable<Todo> {
    return this.httpClient.patch<Todo>(`${environment.baseUrl}/todo/${id}`, dto);
  }

  deleteOne(id: string): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${environment.baseUrl}/todo/${id}`);
  }
}
