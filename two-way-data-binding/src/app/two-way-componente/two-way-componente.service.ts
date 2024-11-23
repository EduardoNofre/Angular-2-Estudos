import { Pessoa } from './Pessoa';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TwoWayComponenteService {


  private nome:String = 'Eduardo Teste';

  public  getNome(){
    return this.nome;
  }

}
