import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFilhaCicloDeVidaComponent } from './componente-filha-ciclo-de-vida.component';

describe('ComponenteFilhaCicloDeVidaComponent', () => {
  let component: ComponenteFilhaCicloDeVidaComponent;
  let fixture: ComponentFixture<ComponenteFilhaCicloDeVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteFilhaCicloDeVidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFilhaCicloDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
