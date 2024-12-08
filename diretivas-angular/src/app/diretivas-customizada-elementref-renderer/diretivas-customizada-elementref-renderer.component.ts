import { Component } from '@angular/core';
import { DiretivasCustomizadaElementrefRendererService } from './diretivas-customizada-elementref-renderer.service';

@Component({
  selector: 'app-diretivas-customizada-elementref-renderer',
  templateUrl: './diretivas-customizada-elementref-renderer.component.html',
  styleUrl: './diretivas-customizada-elementref-renderer.component.css',
})
export class DiretivasCustomizadaElementrefRendererComponent {
  constructor(
    private diretivasCustomizadaElementrefRendererService: DiretivasCustomizadaElementrefRendererService
  ) {}

  public showNames() {
    return this.diretivasCustomizadaElementrefRendererService.exibirNomes();
  }
}
