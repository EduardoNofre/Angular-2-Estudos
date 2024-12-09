import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoServicesNgService {

  public produtos: String[] = ['Shampoo','Condicionador','Esmalte','Creme De Cabelo','Creme Dental','Sabonete']

  constructor() { }

  public listarProdutos(){

    return this.produtos = this.produtos;

  }
}
