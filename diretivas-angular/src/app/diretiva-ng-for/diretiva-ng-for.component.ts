import { DiretivaNgForService } from './diretiva-ng-for.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrl: './diretiva-ng-for.component.css'
})
export class DiretivaNgForComponent {

  public nomePessoas: String[] = [];
  public contator: Number = 0;

  constructor(private diretivaNgForService: DiretivaNgForService){

  }

  public listaNomesPessoas(){

   return this.nomePessoas = this.diretivaNgForService.listaDeNomes();

  }
}
