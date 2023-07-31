import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { TodoCreateSimpleComponent } from './todo-create-simple/todo-create-simple.component';
import { TodoUpdateSimpleComponent } from './todo-update-simple/todo-update-simple.component';
import { TodoDetailPageComponent } from './todo-detail-page/todo-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListPageComponent,
    TodoCreateSimpleComponent,
    TodoUpdateSimpleComponent,
    TodoDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
