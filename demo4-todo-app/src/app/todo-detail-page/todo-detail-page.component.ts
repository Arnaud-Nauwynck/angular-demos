import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoModel } from '../model/todo';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html'
})
export class TodoDetailPageComponent {

  id: number = 0;
  todo: TodoModel|undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = +activatedRoute.snapshot.params['id'];
    // cf next: load from id ...  this.todo = data;
  }
}

