import { TestBed } from '@angular/core/testing';

import { DetallemisevaluacionesService } from './detallemisevaluaciones.service';

describe('DetallemisevaluacionesService', () => {
  let service: DetallemisevaluacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallemisevaluacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
