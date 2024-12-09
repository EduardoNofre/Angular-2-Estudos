import { TestBed } from '@angular/core/testing';

import { CursoServicesNgService } from './curso-services-ng.service';

describe('CursoServicesNgService', () => {
  let service: CursoServicesNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServicesNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
