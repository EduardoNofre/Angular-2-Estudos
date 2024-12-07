import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  input,
} from '@angular/core';

@Directive({
  selector: '[dirInputPropertyBinding]',
})
export class DirInputPropertyBindingDirective {
  @HostBinding('style.backgroundColor') backgroundcolor: String = 'gray';
  @Input() defaultColor: String = 'white';
  @Input() higthLightColor: String = 'yellow';

  constructor() {}

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundcolor = this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundcolor = this.higthLightColor;
  }
}
