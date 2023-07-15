import { Component } from '@angular/core';

interface TodoItem {
  priority: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';

  value1 = "text1";
  value2 = "text2";

  intValue2 = 123;







  items: TodoItem[] = [
    { priority: 1, description: 'learn TypeScript' },
    { priority: 2, description: 'learn Angular' },
    { priority: 1, description: 'learn Http' },
    ];


  condition = true;

  public isCollapsed = true;
  public isMenuCollapsed = false;

  todoDescriptions = [ "Learn TypeScript", "Learn Angular", "Learn Http"];

  item1: TodoItem = { priority: 1, description: 'learn TypeScript' };
}

