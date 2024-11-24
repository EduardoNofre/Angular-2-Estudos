import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProperties01Component } from './input-properties-01.component';

describe('InputProperties01Component', () => {
  let component: InputProperties01Component;
  let fixture: ComponentFixture<InputProperties01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputProperties01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputProperties01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
