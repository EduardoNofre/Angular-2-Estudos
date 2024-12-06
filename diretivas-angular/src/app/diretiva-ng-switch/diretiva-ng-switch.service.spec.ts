import { TestBed } from '@angular/core/testing';

import { DiretivaNgSwitchService } from './diretiva-ng-switch.service';

describe('DiretivaNgSwitchService', () => {
  let service: DiretivaNgSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivaNgSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
