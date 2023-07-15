import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Comp1Component } from './comp1/comp1.component';
import { DemoCompInputComponent } from './demo-comp-input/demo-comp-input.component';
import { DemoCompInputChildComponent } from './demo-comp-input/demo-comp-input-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    DemoCompInputComponent, DemoCompInputChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, // NgbModule.forRoot()
    NgbDropdownModule, NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
