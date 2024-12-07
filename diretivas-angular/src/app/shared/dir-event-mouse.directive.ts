import { Directive,HostListener,HostBinding, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[dirEventMouse]'
})
export class DirEventMouseDirective {

  @HostBinding('style.backgroundColor') backgroundcolor: String = 'palegreen';

  @HostListener('mouseenter') onMouseOver(){

    /*this.renderer2.setStyle(
      this.elementRef.nativeElement,'background-color',
      'palegreen')*/

      this.backgroundcolor ='palegreen';
  }

  @HostListener('mouseleave') onMouseLeave(){

    /*this.renderer2.setStyle(
      this.elementRef.nativeElement,'background-color',
      'white')*/
      this.backgroundcolor ='white';

  }

  constructor() {

   }

}
