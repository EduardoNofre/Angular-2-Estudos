import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveNgClassComponent } from './diretive-ng-class.component';

describe('DiretiveNgClassComponent', () => {
  let component: DiretiveNgClassComponent;
  let fixture: ComponentFixture<DiretiveNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretiveNgClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretiveNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
