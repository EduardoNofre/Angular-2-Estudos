import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateViewChildPaiComponent } from './template-view-child-pai/template-view-child-pai.component';
import { TemplateViewChildFilhaComponent } from './template-view-child-filha/template-view-child-filha.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateViewChildPaiComponent,
    TemplateViewChildFilhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
