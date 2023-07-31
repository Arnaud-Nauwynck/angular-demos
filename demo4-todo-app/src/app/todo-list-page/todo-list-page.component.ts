import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html'
})
export class TodoListPageComponent {

  constructor(private todoService: TodoService,
              private router: Router) {
    console.log('TodoListPageComponent.constructor()');
  }

  ngOnInit() {
    console.log('TodoListPageComponent.ngOnInit()');
  }

  ngOnDestroy() {
    console.log('TodoListPageComponent.ngOnDestroy()');
  }

  get todos(): TodoModel[] { return this.todoService.todos; }

  duplicateTodo(item: TodoModel, idx: number) {
    this.todoService.duplicateTodo(item, idx);
  }

  deleteTodo(item: TodoModel, idx: number) {
    this.todoService.deleteTodo(item, idx);
  }

  onClickOpenDetail(item: TodoModel) {
    this.router.navigate(['/todo', item.id]);
  }
}
