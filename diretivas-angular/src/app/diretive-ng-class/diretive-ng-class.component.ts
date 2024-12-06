import { Component } from '@angular/core';

@Component({
  selector: 'app-diretive-ng-class',
  templateUrl: './diretive-ng-class.component.html',
  styleUrl: './diretive-ng-class.component.css'
})
export class DiretiveNgClassComponent {


  public favorito: boolean = false;
  public favoritoNgClass: boolean = false;

  constructor(){

  }

  public isFavorito(){
    this.favorito = !this.favorito;
  }

  public isFavoritoNgClass(){
    this.favoritoNgClass = !this.favoritoNgClass;
  }
}
