import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveNgStyleComponent } from './diretive-ng-style.component';

describe('DiretiveNgStyleComponent', () => {
  let component: DiretiveNgStyleComponent;
  let fixture: ComponentFixture<DiretiveNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretiveNgStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretiveNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
