import { TestBed } from '@angular/core/testing';

import { ClassStyleBindingService } from './class-style-binding.service';

describe('ClassStyleBindingService', () => {
  let service: ClassStyleBindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassStyleBindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
