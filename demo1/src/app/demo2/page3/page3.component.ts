import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {

  initialId: string|null;
  currentId: string|null;
  paramSubscription!: Subscription;

  value: string|null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.initialId = activatedRoute.snapshot.paramMap.get('id');

    console.log('Page3.constructor, initialId', this.initialId);
    this.currentId = this.initialId;
    this.value = this.initialId;

    this.paramSubscription = activatedRoute.paramMap.subscribe(paramMap => {
      this.currentId = paramMap.get('id');
      console.log("param change, currentId", this.currentId);
    });
  }

  ngOnInit() {
    console.log("Page3.ngOnInit");
  }

  ngOnDestroy() {
    console.log("Page3.ngOnDestroy");
    this.paramSubscription.unsubscribe();
  }

  onClickChangeParam() {
    this.router.navigate(['/page3', this.value]);
  }

  onChangeValue() {
    this.router.navigate(['/page3', this.value]);
  }

  onClickGotoPage2() {
    this.router.navigate(['/page2']);
  }

}
