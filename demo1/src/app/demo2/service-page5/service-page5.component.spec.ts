import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePage5Component } from './service-page5.component';

describe('ServicePage5Component', () => {
  let component: ServicePage5Component;
  let fixture: ComponentFixture<ServicePage5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePage5Component]
    });
    fixture = TestBed.createComponent(ServicePage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
