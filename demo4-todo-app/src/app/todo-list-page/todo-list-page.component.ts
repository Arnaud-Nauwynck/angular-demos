import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo, TodoModel } from '../model/todo';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html'
})
export class TodoListPageComponent {

  todos: TodoModel[] = [
    new TodoModel(1, "learn angular", 1),
    new TodoModel(2, "learn typescript", 1),
    new TodoModel(3, "learn http", 1),
  ];

  constructor(private router: Router) {}

  duplicateTodo(item: TodoModel, idx: number) {
    let newId = this.todos.length + 1;
    let dupItem = new TodoModel(newId, item.description + ' (copy)',
                                item.priority+1);
    this.todos.push(dupItem);
  }

  deleteTodo(item: TodoModel, idx: number) {
    this.todos.splice(idx, 1);
  }

  onClickOpenDetail(item: TodoModel) {
    this.router.navigate(['/todo', item.id]);
  }
}
