import { TestBed } from '@angular/core/testing';

import { InputProperties02ServiceService } from './input-properties-02-service.service';

describe('InputProperties02ServiceService', () => {
  let service: InputProperties02ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputProperties02ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
