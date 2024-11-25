import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-view-child-pai',
  templateUrl: './template-view-child-pai.component.html',
  styleUrl: './template-view-child-pai.component.css',
})
export class TemplateViewChildPaiComponent {
  valor: number = 5;
  destruirCicloEvent: boolean = false;

  @ViewChild('variavelLocalInput') recebeVariavelLocalInput!: ElementRef;

  constructor(){

  }

  public incremento() {
    this.recebeVariavelLocalInput.nativeElement.value++;
  }
  public decrementa() {
    this.recebeVariavelLocalInput.nativeElement.value--;;
  }

  public destruirCiclo() {
    this.destruirCicloEvent = true;
  }
}
