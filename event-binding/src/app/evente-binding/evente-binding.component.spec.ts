import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventeBindingComponent } from './evente-binding.component';

describe('EventeBindingComponent', () => {
  let component: EventeBindingComponent;
  let fixture: ComponentFixture<EventeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventeBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
