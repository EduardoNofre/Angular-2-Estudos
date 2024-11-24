import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties-02.component.html',
  styleUrl: './output-properties-02.component.css'
})
export class OutputProperties02Component {

  @Input() valor:number = 0;

  @Input() exemplo:String = '';

  @Output() mudouValor = new EventEmitter();

  public decrementa(){
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor})
  }

  public incrementa(){
    this.valor ++;
    this.mudouValor.emit({novoValor: this.valor})
  }
}
