import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretiveNgClassComponent } from './diretive-ng-class/diretive-ng-class.component';
import { DiretiveNgStyleModule } from './diretive-ng-style/diretive-ng-style.module';
import { FormsModule } from "@angular/forms";
import { OperadorNgElvisComponent } from './operador-ng-elvis/operador-ng-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { DirFundoAmareloDirective } from './shared/dir-fundo-amarelo.directive';
import { DiretivasCustomizadaElementrefRendererComponent } from './diretivas-customizada-elementref-renderer/diretivas-customizada-elementref-renderer.component';
import { DirFundoVerdeDirective } from './shared/dir-fundo-verde.directive';
import { DirEventMouseDirective } from './shared/dir-event-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,

    DiretivaNgIfComponent,
      DiretivaNgSwitchComponent,
      DiretivaNgForComponent,
      DiretiveNgClassComponent,
      OperadorNgElvisComponent,
      ExemploNgContentComponent,
      DirFundoAmareloDirective,
      DiretivasCustomizadaElementrefRendererComponent,
      DirFundoVerdeDirective,
      DirEventMouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiretiveNgStyleModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
