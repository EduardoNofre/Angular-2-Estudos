import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent';
import { TemplateViewChildPaiComponent } from './template-view-child-pai/template-view-child-pai.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateViewChildPaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
