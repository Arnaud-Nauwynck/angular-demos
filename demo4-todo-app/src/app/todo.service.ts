import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoModel, Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: TodoModel[] = [
    new TodoModel(1, "learn angular", 1),
    new TodoModel(2, "learn typescript", 1),
    new TodoModel(3, "learn http", 1),
  ];

  constructor(private httpClient: HttpClient) {
    console.log('TodoService.constructor()');

    console.log('Calling http GET /api/todo ... subscribe to async response');
    this.httpClient.get<Todo[]>('/api/todo').subscribe(resp => {
      console.log('Finished http GET /api/todo', resp);
      this.todos = resp.map(dto => new TodoModel(dto.id, dto.description, dto.priority));
    }, err => {
      console.log('Failed http GET /api/todo', err);
    });
  }

  findById(id: number): TodoModel|undefined {
    return this.todos.find(x => x.id === id);
  }

  saveNew(src: TodoModel): TodoModel {
    let newId = this.generateNewId();
    let obj = new TodoModel(newId, src.description, src.priority);
    this.todos.push(obj);
    return obj;
  }

  generateNewId(): number {
    return 1 + this.todos.reduce(
        (acc,val) => [ Math.max(acc[0], val.id) ],
        [0]
        )[0];
  }

  duplicateTodo(item: TodoModel, idx: number) {
    let dupItem = new TodoModel(this.generateNewId(), item.description + ' (copy)',
                                item.priority+1);
    this.todos.push(dupItem);
  }

  deleteTodo(item: TodoModel, idx: number) {
    this.todos.splice(idx, 1);
  }


}
