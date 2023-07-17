import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DEMO2_COMPONENTS } from './demo2/demo2-features';
import { AppStoreService} from './app-store.service';
import { DemoBootstrapColumnComponent } from './demo1/demo-bootstrap-column/demo-bootstrap-column.component';
import { DemoBootstrapCarouselComponent } from './demo1/demo-bootstrap-carousel/demo-bootstrap-carousel.component';
import { DemoBootstrapButtonComponent } from './demo1/demo-bootstrap-button/demo-bootstrap-button.component';
import { DemoBootstrapButtonDropdownComponent } from './demo1/demo-bootstrap-button-dropdown/demo-bootstrap-button-dropdown.component';
import { DemoBootstrapNavtabComponent } from './demo1/demo-bootstrap-navtab/demo-bootstrap-navtab.component';

@NgModule({
  declarations: [
    AppComponent,
    ...DEMO2_COMPONENTS,
    DemoBootstrapColumnComponent,
    DemoBootstrapCarouselComponent,
    DemoBootstrapButtonComponent,
    DemoBootstrapButtonDropdownComponent,
    DemoBootstrapNavtabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule, // NgbModule.forRoot()
    NgbDropdownModule, NgbNavModule
  ],
  providers: [
    // AppStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


