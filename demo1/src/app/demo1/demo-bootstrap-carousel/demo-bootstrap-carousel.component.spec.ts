import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBootstrapCarouselComponent } from './demo-bootstrap-carousel.component';

describe('DemoBootstrapCarouselComponent', () => {
  let component: DemoBootstrapCarouselComponent;
  let fixture: ComponentFixture<DemoBootstrapCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBootstrapCarouselComponent]
    });
    fixture = TestBed.createComponent(DemoBootstrapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
