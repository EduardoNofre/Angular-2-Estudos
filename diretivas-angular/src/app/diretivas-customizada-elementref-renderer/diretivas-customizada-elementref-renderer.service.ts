import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiretivasCustomizadaElementrefRendererService {
  public listasDeNomesPessoas: String[] = ['Toguro', 'Pito', 'Mirely', 'Akira'];
  public listasDeNomesAnimais: String[] = ['Gato', 'Cachorro', 'Elefante', 'Passaro'];
  public isTagVisivel: boolean = true;

  constructor() {}

  public exibirNomesPessoas() {
    return this.listasDeNomesPessoas = this.listasDeNomesPessoas;
  }

  public exibirNomesAnimal() {
    return this.listasDeNomesAnimais = this.listasDeNomesAnimais;
  }

  public exibirTag() {
    return this.isTagVisivel = !this.isTagVisivel;
  }
}
