import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBootstrapButtonDropdownComponent } from './demo-bootstrap-button-dropdown.component';

describe('DemoBootstrapButtonDropdownComponent', () => {
  let component: DemoBootstrapButtonDropdownComponent;
  let fixture: ComponentFixture<DemoBootstrapButtonDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBootstrapButtonDropdownComponent]
    });
    fixture = TestBed.createComponent(DemoBootstrapButtonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
