import { Component, Input } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties-02.component.html',
  styleUrl: './output-properties-02.component.css'
})
export class OutputProperties02Component {

  @Input() valor:number = 0;

  public decrementa(){
    this.valor --;
  }

  public incrementa(){
    this.valor ++;
  }
}
