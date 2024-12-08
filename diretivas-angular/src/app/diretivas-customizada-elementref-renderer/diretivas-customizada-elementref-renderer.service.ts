import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiretivasCustomizadaElementrefRendererService {
  
  public listasDeNomes: String[] = ['Toguro', 'Pito', 'Mirely', 'Akira'];

  constructor() {}

  public exibirNomes() {
    return (this.listasDeNomes = this.listasDeNomes);
  }
}
