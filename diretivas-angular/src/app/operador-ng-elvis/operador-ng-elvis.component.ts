import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-ng-elvis',
  templateUrl: './operador-ng-elvis.component.html',
  styleUrl: './operador-ng-elvis.component.css',
})
export class OperadorNgElvisComponent {
  ObjetoExemploSemTipo: any = {
    nome: 'Mirely',
    telefone: '123456-041',
    endereco: 'endereco rua estados unidos',
    idade: 20,
  };

  ObjetoExemploSemTipoNull: any = {
    nomeNull: null,
    telefoneNull: null,
    enderecoNull: null,
    idadeNull: null,
    ObjetoExemploSemTipoNullEmpresa: {
      nomeEmpresa: 'TCI COTIA',
      enderecoEmpresaNUll: null,
    },
  };
}
