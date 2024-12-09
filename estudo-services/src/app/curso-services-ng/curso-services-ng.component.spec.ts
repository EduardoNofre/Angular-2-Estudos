import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoServicesNgComponent } from './curso-services-ng.component';

describe('CursoServicesNgComponent', () => {
  let component: CursoServicesNgComponent;
  let fixture: ComponentFixture<CursoServicesNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoServicesNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoServicesNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
