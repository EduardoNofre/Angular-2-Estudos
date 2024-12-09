import { Component } from '@angular/core';
import { CursoServicesNgService } from './curso-services-ng.service';

@Component({
  selector: 'app-curso-services-ng',
  templateUrl: './curso-services-ng.component.html',
  styleUrl: './curso-services-ng.component.css',
})
export class CursoServicesNgComponent {


  constructor(private cursoServicesNgService: CursoServicesNgService) {}

  public listaDeProdutos() {
    return this.cursoServicesNgService.listarProdutos();
  }
}
