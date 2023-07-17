import { Component, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface FieldEvent {
  message: string;
}

@Component({
  selector: 'app-demo-comp-output-child',
  templateUrl: './demo-comp-output-child.component.html'
})
export class DemoCompOutputChildComponent {

  onClickCustomEmit() {
    this.fieldChange.next({ message: "event message"});
  }

  @Output()
  fieldChange = new Subject<FieldEvent>();


  onClick($event: Event) {
    console.log("button clicked!", $event);
  }

}
