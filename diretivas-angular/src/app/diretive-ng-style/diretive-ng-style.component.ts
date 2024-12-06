import { Component } from '@angular/core';

@Component({
  selector: 'app-diretive-ng-style',
  templateUrl: './diretive-ng-style.component.html',
  styleUrl: './diretive-ng-style.component.css',
})
export class DiretiveNgStyleComponent {
  public ativo: boolean = false;
  public tamanhoFonte: number = 20;

  public tamanhoFonteComStyle: number = 20;
  public ativoComStyle: boolean = false;

  public isAtivo() {
    return (this.ativo = !this.ativo);
  }

  public isAtivoComStyle() {
    return (this.ativoComStyle = !this.ativoComStyle);
  }
}
