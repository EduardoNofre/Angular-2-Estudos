import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputProperties01Component } from './input-properties-01/input-properties-01.component';
import { InputProperties02Component } from './input-properties-02/input-properties-02.component';

@NgModule({
  declarations: [
    AppComponent,
    InputProperties01Component,
    InputProperties02Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
