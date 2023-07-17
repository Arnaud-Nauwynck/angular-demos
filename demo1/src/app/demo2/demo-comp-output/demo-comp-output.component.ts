import { Component } from '@angular/core';
import { FieldEvent } from './demo-comp-output-child.component';

@Component({
  selector: 'app-demo-comp-output',
  templateUrl: './demo-comp-output.component.html'
})
export class DemoCompOutputComponent {

  parentCallback(event: FieldEvent) {
    console.log("parentCallback()", event);
  }

}
