import { Component, Input, Output } from '@angular/core';
import {Subject } from 'rxjs';

@Component({
  selector: 'app-demo2-bidirectionbinding-child',
  templateUrl: './demo2-bidirectionbinding-child.component.html'
})
export class Demo2BidirectionbindingChildComponent {

  @Input()
  childField: string = "";

  @Output()
  childFieldChange = new Subject<string>();

  onInputChange() {
    this.childFieldChange.next(this.childField);
  }
}
