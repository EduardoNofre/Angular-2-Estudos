import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiretivaNgForService {

  public  nomes: String[] = ['Eduardo','Natalia','Mirela','Cassia','Juca','Jones'];

  constructor() { }

  public listaDeNomes(){

    return this.nomes = this.nomes;

  }
}
