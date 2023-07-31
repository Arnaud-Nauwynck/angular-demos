import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TodoModel } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create-simple',
  templateUrl: './todo-create-simple.component.html',
})
export class TodoCreateSimpleComponent {

  todo: TodoModel = new TodoModel(0, "", 1);

  constructor(private todoService: TodoService,
              private router: Router) {}

  onClickNew() {
    let newObj = this.todoService.saveNew(this.todo);
    this.router.navigate([ 'todo', newObj.id ]);
  }

}
