import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutputProperties01Component } from './output-properties-01/output-properties-01.component';
import { OutputProperties02Component } from './output-properties-02/output-properties-02.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputProperties01Component,
    OutputProperties02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
