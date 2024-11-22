import { TestBed } from '@angular/core/testing';

import { EventeBindingService } from './evente-binding.service';

describe('EventeBindingService', () => {
  let service: EventeBindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventeBindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
