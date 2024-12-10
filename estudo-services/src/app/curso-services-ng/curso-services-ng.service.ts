import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoServicesNgService {
  public produtos: String[] = [
    'Shampoo',
    'Condicionador',
    'Esmalte',
    'Creme De Cabelo',
    'Creme Dental',
    'Sabonete',
  ];

  constructor() {}

  public getProdutos() {
    return this.produtos;
  }

  public setProdutos(curso: String) {
    return this.produtos.push(curso);
  }
}
