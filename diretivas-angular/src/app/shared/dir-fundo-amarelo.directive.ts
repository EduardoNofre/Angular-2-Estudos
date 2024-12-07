import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[dirFundoAmarelo]'
})
export class DirFundoAmareloDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor='yellow';
  }

}
