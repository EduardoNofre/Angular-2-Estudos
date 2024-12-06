import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorNgElvisComponent } from './operador-ng-elvis.component';

describe('OperadorNgElvisComponent', () => {
  let component: OperadorNgElvisComponent;
  let fixture: ComponentFixture<OperadorNgElvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperadorNgElvisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorNgElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
