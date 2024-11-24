import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  valor: number = 5;
  destruirCicloEvent: boolean = false;

  public mudarValor() {
    this.valor++;
  }

  public destruirCiclo() {
    this.destruirCicloEvent = true;
  }
}
