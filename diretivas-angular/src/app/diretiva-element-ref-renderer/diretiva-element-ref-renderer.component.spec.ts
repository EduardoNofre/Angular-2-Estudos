import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaElementRefRendererComponent } from './diretiva-element-ref-renderer.component';

describe('DiretivaElementRefRendererComponent', () => {
  let component: DiretivaElementRefRendererComponent;
  let fixture: ComponentFixture<DiretivaElementRefRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretivaElementRefRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaElementRefRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
