import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProperties02Component } from './input-properties-02.component';

describe('InputProperties02Component', () => {
  let component: InputProperties02Component;
  let fixture: ComponentFixture<InputProperties02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputProperties02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputProperties02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
