import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-comp-input-child',
  templateUrl: './demo-comp-input-child.component.html'
})
export class DemoCompInputChildComponent {

  @Input()
  field: string = '';

}
