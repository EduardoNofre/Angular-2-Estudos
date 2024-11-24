import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-input-properties-01',
  templateUrl: './input-properties-01.component.html',
  styleUrl: './input-properties-01.component.css',
})
export class InputProperties01Component {
  public nomeDoCurso: string = 'Angular';
  public cliente: string = 'Eduardo';

  public pessoa: any = {
    nomeCliente: 'jose carlos',
    telefone: '8888 - 5558',
    endereco: 'Rua carlos adão',
    idade: 20,
    cidade: 'Cotianopolis',
    estado: 'SPM',
  };

  public input: string = '@Input()';

  constructor() {}
}
