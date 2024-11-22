import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventeBindingService {
  valorAtual: String = '';
  valorAtualPerderFoco: String = '';
  mouseIsOver: boolean = false;

  constructor() {}

  public botaoClicado() {
    alert('Confirmação de botão clicado');
  }

  public capturaDeEventoDeTela(evento: String) {
    return (this.valorAtual = evento);
  }

  public capturaDeEventoDeTelaValorAtualPerderFoco(evento: String) {
    return (this.valorAtualPerderFoco = evento);
  }

  public eventoMouse() {
   return  this.mouseIsOver = !this.mouseIsOver;
  }
}
