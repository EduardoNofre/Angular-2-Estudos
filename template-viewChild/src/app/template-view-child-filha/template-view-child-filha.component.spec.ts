import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateViewChildFilhaComponent } from './template-view-child-filha.component';

describe('TemplateViewChildFilhaComponent', () => {
  let component: TemplateViewChildFilhaComponent;
  let fixture: ComponentFixture<TemplateViewChildFilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateViewChildFilhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateViewChildFilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
