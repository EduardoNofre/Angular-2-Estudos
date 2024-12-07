import { ElementRef } from '@angular/core';
import { DirFundoAmareloDirective } from './dir-fundo-amarelo.directive';


describe('DirFundoAmareloDirective', () => {
  
  it('should create an instance', () => {
    const directive = new DirFundoAmareloDirective(elementRef: ElementRef);
    expect(directive).toBeTruthy();
  });
});
