import { TestBed } from '@angular/core/testing';

import { ComboempresaService } from './comboempresa.service';

describe('ComboempresaService', () => {
  let service: ComboempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
