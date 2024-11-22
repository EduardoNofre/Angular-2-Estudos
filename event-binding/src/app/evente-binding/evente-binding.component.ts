import { Component } from '@angular/core';
import { EventeBindingService } from './evente-binding.service';

@Component({
  selector: 'app-evente-binding',
  templateUrl: './evente-binding.component.html',
  styleUrl: './evente-binding.component.css',
})
export class EventeBindingComponent {
  valorAtualDigitado: String = '';
  valorAtualPerderFoco: String = '';
  mouseIsOver: boolean = false;

  constructor(private eventeBindingService: EventeBindingService) {}

  public botaoClicado() {
    this.eventeBindingService.botaoClicado();
  }

  public capturaDeEventoDeTela(evento: String) {
    this.valorAtualDigitado =
      this.eventeBindingService.capturaDeEventoDeTela(evento);
  }

  public capturaDeEventoDeTelaPerderFoco(evento: String) {
    this.valorAtualPerderFoco =
      this.eventeBindingService.capturaDeEventoDeTelaValorAtualPerderFoco(evento);
  }

  public eventoMouse() {
    this.mouseIsOver = this.eventeBindingService.eventoMouse();
  }
}
