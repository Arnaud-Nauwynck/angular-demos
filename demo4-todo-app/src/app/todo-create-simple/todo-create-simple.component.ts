import { Component } from '@angular/core';

import { TodoModel } from '../model/todo';

@Component({
  selector: 'app-todo-create-simple',
  templateUrl: './todo-create-simple.component.html',
})
export class TodoCreateSimpleComponent {

  todo: TodoModel = new TodoModel(0, "", 1);

  onClickNew() {
    console.log('todo to add', this.todo);
  }
}
