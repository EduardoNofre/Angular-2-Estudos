import { Component } from '@angular/core';
import { CursoServicesNgService } from '../curso-services-ng/curso-services-ng.service';

@Component({
  selector: 'app-criar-cursos-ng',
  templateUrl: './criar-cursos-ng.component.html',
  styleUrl: './criar-cursos-ng.component.css',
  providers: [CursoServicesNgService]
})
export class CriarCursosNgComponent {

  constructor(private cursoServicesNgService: CursoServicesNgService) {

  }

  public listaDeProdutos() {
    return this.cursoServicesNgService.getProdutos();
  }

  public inserirCursos(curso: String){
    return this.cursoServicesNgService.setProdutos(curso);
  }
}
