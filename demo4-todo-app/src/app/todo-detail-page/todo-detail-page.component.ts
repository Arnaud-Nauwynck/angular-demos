import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoModel } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html'
})
export class TodoDetailPageComponent {

  id: number = 0;
  todo: TodoModel|undefined = undefined;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute) {
    this.id = +activatedRoute.snapshot.params['id'];
    this.todo = this.todoService.findById(this.id);
  }
}

