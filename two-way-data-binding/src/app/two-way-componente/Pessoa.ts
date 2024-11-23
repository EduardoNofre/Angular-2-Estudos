import { Component, NgModule } from '@angular/core';

export class Pessoa {
    
  private nomeCliente: String;
  private telefone: String;
  private endereco: String;
  private idade: number;
  private cidade: String;
  private estado: String;


  constructor(nomeCliente: String,telefone: String,endereco: String,idade: number,cidade: String,estado: String) {
    this.nomeCliente = nomeCliente;
    this.telefone = telefone;
    this.endereco = endereco;
    this.idade = idade;
    this.cidade = cidade;
    this.estado = estado;
  }
}
