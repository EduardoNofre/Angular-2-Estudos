import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dirFundoVerde]',
})
export class DirFundoVerdeDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,'background-color',
      'palegreen'
    );
  }
}
