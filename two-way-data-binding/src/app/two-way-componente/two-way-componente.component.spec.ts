import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayComponenteComponent } from './two-way-componente.component';

describe('TwoWayComponenteComponent', () => {
  let component: TwoWayComponenteComponent;
  let fixture: ComponentFixture<TwoWayComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
