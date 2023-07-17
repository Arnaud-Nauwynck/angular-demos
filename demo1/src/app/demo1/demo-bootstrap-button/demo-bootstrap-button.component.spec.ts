import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBootstrapButtonComponent } from './demo-bootstrap-button.component';

describe('DemoBootstrapButtonComponent', () => {
  let component: DemoBootstrapButtonComponent;
  let fixture: ComponentFixture<DemoBootstrapButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBootstrapButtonComponent]
    });
    fixture = TestBed.createComponent(DemoBootstrapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
