import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBootstrapColumnComponent } from './demo-bootstrap-column.component';

describe('DemoBootstrapColumnComponent', () => {
  let component: DemoBootstrapColumnComponent;
  let fixture: ComponentFixture<DemoBootstrapColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBootstrapColumnComponent]
    });
    fixture = TestBed.createComponent(DemoBootstrapColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
