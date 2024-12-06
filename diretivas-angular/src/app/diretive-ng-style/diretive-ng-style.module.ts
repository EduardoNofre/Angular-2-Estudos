import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretiveNgStyleComponent } from './diretive-ng-style.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DiretiveNgStyleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DiretiveNgStyleComponent]
})
export class DiretiveNgStyleModule { }
