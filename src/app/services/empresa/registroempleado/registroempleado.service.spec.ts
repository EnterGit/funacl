import { TestBed } from '@angular/core/testing';

import { RegistroempleadoService } from './registroempleado.service';

describe('RegistroempleadoService', () => {
  let service: RegistroempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
