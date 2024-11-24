import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-componente-filha-ciclo-de-vida',
  templateUrl: './componente-filha-ciclo-de-vida.component.html',
  styleUrl: './componente-filha-ciclo-de-vida.component.css',
})
export class ComponenteFilhaCicloDeVidaComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    AfterViewChecked
{

  @Input() valorInicialInput:number = 10;


  public constructor() {
    this.log('constructor');
  }

  public ngOnInit() {
    this.log('ngOnInit');
  }

  public ngOnChanges() {
    this.log('ngOnChanges');
  }

  public ngDoCheck() {
    this.log('ngDoCheck');
  }

  public ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  public ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  public ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  public ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  public ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  private log(hook: String) {
    console.log(hook);
  }
}
