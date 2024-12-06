import { TestBed } from '@angular/core/testing';

import { DiretivaNgForService } from './diretiva-ng-for.service';

describe('DiretivaNgForService', () => {
  let service: DiretivaNgForService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivaNgForService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
