import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBootstrapNavtabComponent } from './demo-bootstrap-navtab.component';

describe('DemoBootstrapNavtabComponent', () => {
  let component: DemoBootstrapNavtabComponent;
  let fixture: ComponentFixture<DemoBootstrapNavtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBootstrapNavtabComponent]
    });
    fixture = TestBed.createComponent(DemoBootstrapNavtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
