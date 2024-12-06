import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiretivaNgIfService {

  private cursos: String[] = ['Java','Clipper'];
  private cursosDisponivel: String[] = ['Angular', 'Vue', 'C#', 'Python'];
  private cursosNaoDisponivel: String[] = ['GO Lang', 'Assembler', 'Cobol', 'DB2'];
  private ocultaListaCursos: boolean = false;

  constructor() { }


  /**
   * listarCursos
   */
  public listarCursos () {    
    return this.cursos;
  }

  /**
   * listaCursosDiponivel
   */
  public listaCursosDiponivel() {
    return this.cursosDisponivel;
  }

  /**
   * ocultarCursos
   */
  public ocultarCursos() {
   
    return this.ocultaListaCursos = !this.ocultaListaCursos;
  }
  /**
   *   public listaCursosNaoDisponivel() {

   */
  public listaCursosNaoDisponivel() {
    return this.cursosNaoDisponivel = this.cursosNaoDisponivel;
  }
 
}
