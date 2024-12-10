import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCursosNgComponent } from './criar-cursos-ng.component';

describe('CriarCursosNgComponent', () => {
  let component: CriarCursosNgComponent;
  let fixture: ComponentFixture<CriarCursosNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarCursosNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCursosNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
