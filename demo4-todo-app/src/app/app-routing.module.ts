import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { TodoCreateSimpleComponent } from './todo-create-simple/todo-create-simple.component';
import { TodoDetailPageComponent } from './todo-detail-page/todo-detail-page.component';

const routes: Routes = [
  { path:'todos', component: TodoListPageComponent },
  { path:'new-todo', component: TodoCreateSimpleComponent },
  { path:'todo/:id', component: TodoDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
