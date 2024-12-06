import { Component } from '@angular/core';
import { DiretivaNgIfService } from './diretiva-ng-if.service';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrl: './diretiva-ng-if.component.css'
})
export class DiretivaNgIfComponent {

  cursos: String[] = [];
  cursosDisponivel: String[] = [];
  ocultarListaCursos: boolean = false;
  cursosNaoDisponivelLista: String[] = [];

  constructor(private DiretivaNgIfService: DiretivaNgIfService) {}

  /**
   * listaDeCursos
   */
  public listaDeCursos() {
    return (this.cursos =
      this.DiretivaNgIfService.listarCursos());
  }

  /**
   * exibirCursosDisponivel
   */
  public exibirCursosDisponivel() {
    return (this.cursosDisponivel =
      this.DiretivaNgIfService.listaCursosDiponivel());
  }

  /**
   * ocultarCursos
   */
  public ocultarCursos() {
    return this.ocultarListaCursos =  this.DiretivaNgIfService.ocultarCursos();
  }

  /**
   * cursosNaoDisponivel
   */
  public cursosNaoDisponivel() {
    return this.cursosNaoDisponivelLista = this.DiretivaNgIfService.listaCursosNaoDisponivel();
  }
}
