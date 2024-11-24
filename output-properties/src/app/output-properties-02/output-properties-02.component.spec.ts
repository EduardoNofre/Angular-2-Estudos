import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputProperties02Component } from './output-properties-02.component';

describe('OutputProperties02Component', () => {
  let component: OutputProperties02Component;
  let fixture: ComponentFixture<OutputProperties02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputProperties02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputProperties02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
