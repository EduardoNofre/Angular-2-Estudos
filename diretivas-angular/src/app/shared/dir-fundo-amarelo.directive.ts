import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[dirFundoAmarelo]'
})
export class DirFundoAmareloDirective {

  constructor(private elementRef: ElementRef) { 
    // não é um modelo a ser utlizado pois a propria documentação do angular.
    // vejo a forma certa e segura de utilizar na  DirFundoVerdeDirective
    this.elementRef.nativeElement.style.backgroundColor='yellow';
  }

}
