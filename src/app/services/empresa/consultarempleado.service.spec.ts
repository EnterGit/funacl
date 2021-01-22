import { TestBed } from '@angular/core/testing';

import { ConsultarempleadoService } from './consultarempleado.service';

describe('ConsultarempleadoService', () => {
  let service: ConsultarempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
