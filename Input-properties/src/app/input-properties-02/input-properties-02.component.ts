import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties-02.component.html',
  styleUrl: './input-properties-02.component.css'
})
export class InputProperties02Component {

  @Input() nomeCursoInput: String = '';
  @Input() nomeClienteInput: String = '';
  @Input() pessoaInput: any = '';
  @Input() InputInput: String = '';


  constructor(){

  }

}
