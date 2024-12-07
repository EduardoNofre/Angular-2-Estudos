import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomizadaElementrefRendererComponent } from './diretivas-customizada-elementref-renderer.component';

describe('DiretivasCustomizadaElementrefRendererComponent', () => {
  let component: DiretivasCustomizadaElementrefRendererComponent;
  let fixture: ComponentFixture<DiretivasCustomizadaElementrefRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretivasCustomizadaElementrefRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasCustomizadaElementrefRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
