import { TestBed } from '@angular/core/testing';

import { CriarCursosNgService } from './criar-cursos-ng.service';

describe('CriarCursosNgService', () => {
  let service: CriarCursosNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarCursosNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
