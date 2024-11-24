import { TestBed } from '@angular/core/testing';

import { InputProperties01ServiceService } from './input-properties-01-service.service';

describe('InputProperties01ServiceService', () => {
  let service: InputProperties01ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputProperties01ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
