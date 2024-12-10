import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoServicesNgComponent } from './curso-services-ng/curso-services-ng.component';
import { CriarCursosNgComponent } from './criar-cursos-ng/criar-cursos-ng.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoServicesNgComponent,
    CriarCursosNgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
