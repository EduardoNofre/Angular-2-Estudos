import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateViewChildPaiComponent } from './template-view-child-pai.component';

describe('TemplateViewChildPaiComponent', () => {
  let component: TemplateViewChildPaiComponent;
  let fixture: ComponentFixture<TemplateViewChildPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateViewChildPaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateViewChildPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
