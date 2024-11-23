import { Component } from '@angular/core';
import { TwoWayComponenteService } from './two-way-componente.service';
import { FormsModule } from '@angular/forms';
import { Pessoa } from './Pessoa';

@Component({
  selector: 'app-two-way-componente',
  templateUrl: './two-way-componente.component.html',
  styleUrl: './two-way-componente.component.css',
})
export class TwoWayComponenteComponent {

  public nome:String = '';
  public exemplo:String = '{{Atributo do objeto ou Atributo do componente }}'

  pessoa:any ={
    nomeCliente: 'jose carlos',
    telefone:'8888 - 5558',
    endereco:'Rua carlos adão',
    idade: 20,
    cidade:'Cotianopolis',
    estado:'SPM'
  }

  constructor(private twoWayComponenteService: TwoWayComponenteService) {
    this.nome = this.twoWayComponenteService.getNome();

  }


  public nomeCliente() {
    return this.nome = this.twoWayComponenteService.getNome();
  }

  public pessoas(){
    this.pessoa.setNome('xxx');
  }

}
