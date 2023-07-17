import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2-interpolation',
  templateUrl: './demo2-interpolation.component.html',
})
export class Demo2InterpolationComponent {

  value1Text = "text1";

  value2Text = "text2";

  value1Number = 12;
  value2Number = 3.14159;

  value1Bool = true;
  value2Bool = false;

  value1Obj = { text: "objectText1", fieldInt: 1 };

  get value1Getter(): string { return this.value1Text; }

  function1(): string { return this.value1Text; }

}
