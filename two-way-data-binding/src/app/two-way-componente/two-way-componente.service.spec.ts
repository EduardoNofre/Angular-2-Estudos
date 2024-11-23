import { TestBed } from '@angular/core/testing';

import { TwoWayComponenteService } from './two-way-componente.service';

describe('TwoWayComponenteService', () => {
  let service: TwoWayComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoWayComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
