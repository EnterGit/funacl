import { TestBed } from '@angular/core/testing';

import { IngempresaService } from './ingempresa.service';

describe('IngemopresaService', () => {
  let service: IngempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
