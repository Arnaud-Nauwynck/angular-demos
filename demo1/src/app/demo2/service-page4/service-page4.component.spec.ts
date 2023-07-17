import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePage4Component } from './service-page4.component';

describe('ServicePage4Component', () => {
  let component: ServicePage4Component;
  let fixture: ComponentFixture<ServicePage4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePage4Component]
    });
    fixture = TestBed.createComponent(ServicePage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
