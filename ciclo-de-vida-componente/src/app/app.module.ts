import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhaCicloDeVidaComponent } from './componente-filha-ciclo-de-vida/componente-filha-ciclo-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePaiComponent,
    ComponenteFilhaCicloDeVidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
