import { TestBed } from '@angular/core/testing';

import { DiretiveNgStyleService } from './diretive-ng-style.service';

describe('DiretiveNgStyleService', () => {
  let service: DiretiveNgStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretiveNgStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
