import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoBootstrapColumnComponent } from './demo1/demo-bootstrap-column/demo-bootstrap-column.component';
import { DemoBootstrapCarouselComponent } from './demo1/demo-bootstrap-carousel/demo-bootstrap-carousel.component';
import { DemoBootstrapButtonComponent } from './demo1/demo-bootstrap-button/demo-bootstrap-button.component';
import { DemoBootstrapButtonDropdownComponent } from './demo1/demo-bootstrap-button-dropdown/demo-bootstrap-button-dropdown.component';
import { DemoBootstrapNavtabComponent } from './demo1/demo-bootstrap-navtab/demo-bootstrap-navtab.component';

import { Page1Component } from './demo2/page1/page1.component';
import { Page2Component } from './demo2/page2/page2.component';
import { Page3Component } from './demo2/page3/page3.component';
import { ServicePage4Component } from './demo2/service-page4/service-page4.component';
import { ServicePage5Component } from './demo2/service-page5/service-page5.component';
// import { Comp1Component } from './demo2/comp1/comp1.component';

const routes: Routes = [

  {path: "demo1/demo-bootstrap-column", component: DemoBootstrapColumnComponent },
  {path: "demo1/demo-bootstrap-carousel", component: DemoBootstrapCarouselComponent },
  {path: "demo1/demo-bootstrap-button", component: DemoBootstrapButtonComponent },
  {path: "demo1/demo-bootstrap-button-dropdown", component: DemoBootstrapButtonDropdownComponent },
  {path: "demo1/demo-bootstrap-navtab", component: DemoBootstrapNavtabComponent },

  {path: "page1", component: Page1Component },
  {path: "page2", component: Page2Component },
  {path: "page3/:id", component: Page3Component },
  {path: "page4", component: ServicePage4Component },
  {path: "page5", component: ServicePage5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
