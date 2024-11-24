import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputProperties01Component } from './output-properties-01.component';

describe('OutputProperties01Component', () => {
  let component: OutputProperties01Component;
  let fixture: ComponentFixture<OutputProperties01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputProperties01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputProperties01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
