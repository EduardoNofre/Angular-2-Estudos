import { TestBed } from '@angular/core/testing';

import { DiretivasCustomizadaElementrefRendererService } from './diretivas-customizada-elementref-renderer.service';

describe('DiretivasCustomizadaElementrefRendererService', () => {
  let service: DiretivasCustomizadaElementrefRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivasCustomizadaElementrefRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
