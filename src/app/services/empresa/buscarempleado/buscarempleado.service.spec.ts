import { TestBed } from '@angular/core/testing';

import { BuscarempleadoService } from './buscarempleado.service';

describe('BuscarempleadoService', () => {
  let service: BuscarempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
